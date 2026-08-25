// Optimizeaza imaginile: din `imagini-sursa/` genereaza in `public/images/`
// cate o varianta WebP (moderna, mica) si una JPEG (rezerva), la dimensiunea
// la care sunt chiar afisate pe site — nu la rezolutia originala.
//
// Rulare: npm run imagini
//
// Fisierele generate sunt comise in git, ca deploy-ul pe GitHub Pages sa nu
// depinda de rularea acestui script. Reruleaza-l doar cand schimbi o poza.
import { readdir, mkdir, stat } from 'node:fs/promises'
import { resolve, dirname, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const radacina = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sursa = resolve(radacina, 'imagini-sursa')
const destinatie = resolve(radacina, 'public/images')

// Latimea la care e afisata fiecare imagine, x2 pentru ecrane retina.
// `implicit` acopera orice poza noua adaugata in imagini-sursa.
// Cardurile de serviciu afiseaza poza intr-o caseta de ~380x180px, deci
// decupez din start la acelasi raport ~2:1 in loc sa las CSS-ul sa taie
// o poza portret incarcata degeaba la rezolutie mare.
const implicit = { latime: 800, inaltime: 400 }
const setari = {
  // Fundal hero, pe toata latimea ecranului, acoperit de un overlay inchis
  // => tolereaza o compresie mai agresiva fara sa se vada.
  'hero.jpg': { latime: 1600, inaltime: 1067, calitate: 68 },
  // Poza de profil, afisata ca cerc de 190px.
  'profil.jpeg': { latime: 400, inaltime: 400 },
}

await mkdir(destinatie, { recursive: true })

const fisiere = (await readdir(sursa)).filter((f) => /\.(jpe?g|png)$/i.test(f))
let totalInainte = 0
let totalDupa = 0

for (const fisier of fisiere) {
  const { latime, inaltime, calitate = 76 } = { ...implicit, ...setari[fisier] }
  const nume = parse(fisier).name
  const caleSursa = resolve(sursa, fisier)

  totalInainte += (await stat(caleSursa)).size

  const baza = sharp(caleSursa)
    .rotate() // respecta orientarea EXIF, altfel unele poze apar intoarse
    .resize({ width: latime, height: inaltime, fit: 'cover', withoutEnlargement: true })

  const iesiri = [
    { ext: 'webp', optiuni: { quality: calitate } },
    { ext: 'jpg', optiuni: { quality: calitate + 4, mozjpeg: true } },
  ]

  const dimensiuni = []
  for (const { ext, optiuni } of iesiri) {
    const caleIesire = resolve(destinatie, `${nume}.${ext}`)
    const info = await baza.clone().toFormat(ext === 'jpg' ? 'jpeg' : ext, optiuni).toFile(caleIesire)
    dimensiuni.push(`${ext} ${(info.size / 1024).toFixed(0)}KB`)
    if (ext === 'jpg') totalDupa += info.size
  }

  console.log(`  ${fisier} → ${dimensiuni.join(', ')}`)
}

const mb = (b) => (b / 1024 / 1024).toFixed(2)
console.log(
  `\n[imagini] ${fisiere.length} imagini: ${mb(totalInainte)}MB → ${mb(totalDupa)}MB (rezerva JPEG)`,
)
