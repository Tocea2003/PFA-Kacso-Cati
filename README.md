# Site prezentare — PFA Kacso Cati (Verificare piese)

Site de prezentare pentru serviciile de **verificare si control calitate piese** oferite de
PFA Kacso Cati (Cisnadie, jud. Sibiu). Construit cu **React + Vite**, complet static, fara backend.

Formularul de contact deschide **WhatsApp** cu mesajul deja pre-completat din datele introduse.

## Cerinte

- [Node.js](https://nodejs.org) versiunea 18 sau mai noua (recomandat LTS)

## Rulare locala

```bash
npm install
npm run dev
```

Apoi deschide adresa afisata in terminal (de obicei `http://localhost:5173`).

## Build pentru productie

```bash
npm run build
```

Rezultatul (site static gata de hosting) apare in folderul `dist/`.
Poti verifica local build-ul cu:

```bash
npm run preview
```

## Cum editezi continutul

Aproape tot textul este centralizat in **`src/data/content.js`**:

- date de contact (telefon, email, adresa)
- numarul de WhatsApp (`telefonWhatsApp`, format international fara `+`, ex. `40752291659`)
- serviciile afisate
- experienta profesionala
- calificari si competente

Nu trebuie sa modifici componentele pentru a schimba textele.

## Cum inlocuiesti pozele demo cu poze reale

Pune pozele tale in folderul **`public/images/`**, pastrand aceleasi nume de fisier:

| Fisier                      | Unde apare                            |
| --------------------------- | ------------------------------------- |
| `hero.jpg`                  | imaginea mare de sus                  |
| `serviciu-sortare.jpg`      | card „Sortare si control calitate"    |
| `serviciu-dimensional.jpg`  | card „Verificare vizuala si dimens."  |
| `serviciu-control.jpg`      | card „Identificare defecte"           |
| `serviciu-rework.jpg`       | card „Rework si suport productie"     |
| `serviciu-rapoarte.jpg`     | card „Documentatie si raportare"      |
| `serviciu-logistica.jpg`    | card „Organizare activitati logistice"|
| `serviciu-suport.jpg`       | card „Suport calitate companii ind."  |
| `serviciu-reclamatii.jpg`   | card „Gestionarea reclamatiilor"      |

Pana pui pozele reale, se afiseaza automat un placeholder stilizat (nimic stricat).

## Publicare pe GitHub (repo public)

Repo-ul local este deja pregatit. Creeaza un repo **public** pe contul tau GitHub,
apoi ruleaza (inlocuind `UTILIZATOR` si `NUME-REPO`):

```bash
git remote add origin https://github.com/UTILIZATOR/NUME-REPO.git
git branch -M main
git push -u origin main
```

## Publicare pe GitHub Pages (automat)

Deploy-ul este deja configurat in `.github/workflows/deploy.yml`. Dupa ce ai facut push:

1. In repo pe GitHub: **Settings → Pages**
2. La **Source** alege **GitHub Actions** (nu „Deploy from a branch")
3. Gata. La fiecare push pe `main`, site-ul se reconstruieste si se publica singur.

Adresa va fi: `https://UTILIZATOR.github.io/NUME-REPO/`

Progresul deploy-ului se vede in tab-ul **Actions**.

### De ce nu trebuie sa setezi `base` manual

`vite.config.js` deduce automat subfolderul din numele repo-ului
(variabila `GITHUB_REPOSITORY` pe care o seteaza GitHub Actions), iar caile
imaginilor folosesc `import.meta.env.BASE_URL`. Deci merge indiferent cum
numesti repo-ul, fara sa modifici nimic.

## Domeniu propriu: controlcalitatesibiu.ro

Site-ul este deja configurat pentru domeniul **controlcalitatesibiu.ro**:

- `public/CNAME` — ii spune GitHub Pages pe ce domeniu sa raspunda
- `BASE_PATH: /` in `.github/workflows/deploy.yml` — pe domeniu propriu site-ul
  sta in radacina, nu in `/nume-repo/`
- adresele absolute (canonical, Open Graph, date structurate, `sitemap.xml`,
  `robots.txt`) folosesc noul domeniu

### Ce se seteaza la registrar (DNS)

| Tip     | Nume (host) | Valoare                |
| ------- | ----------- | ---------------------- |
| `A`     | `@`         | `185.199.108.153`      |
| `A`     | `@`         | `185.199.109.153`      |
| `A`     | `@`         | `185.199.110.153`      |
| `A`     | `@`         | `185.199.111.153`      |
| `CNAME` | `www`       | `tocea2003.github.io.` |

### Ordinea pasilor (important)

1. Cumperi domeniul si setezi DNS-ul de mai sus.
2. Faci push pe `main` (deploy-ul porneste singur).
3. In repo: **Settings → Pages → Custom domain** → `controlcalitatesibiu.ro` → **Save**.
4. Astepti validarea DNS, apoi bifezi **Enforce HTTPS** (certificatul poate dura
   pana la 24h).
5. In Google Search Console adaugi noul domeniu ca proprietate si retrimiti
   `https://controlcalitatesibiu.ro/sitemap.xml`.

Daca faci pasul 3 inainte ca DNS-ul sa fie propagat, adresa veche
`tocea2003.github.io/PFA-Kacso-Cati/` redirecteaza catre un domeniu care inca nu
raspunde — site-ul pare picat pana se propaga.

## Alternative de hosting

- **Netlify / Vercel:** conecteaza repo-ul; comanda build `npm run build`, folder publicare `dist`.
  (Acolo `base` ramane `/` automat, nu trebuie configurat nimic.)
