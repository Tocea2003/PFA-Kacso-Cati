// Injecteaza HTML-ul pre-randat in dist/index.html.
//
// Rulat dupa cele doua build-uri Vite (client + ssr), din scriptul `build`.
// Rezultatul: pagina livrata contine deja textele, nu doar un <div> gol.
// React preia controlul la incarcare si inlocuieste continutul, deci
// comportamentul in browser ramane neschimbat.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const radacina = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const caleIndex = resolve(radacina, 'dist/index.html')
const caleServer = resolve(radacina, 'dist-ssr/entry-server.js')

if (!existsSync(caleServer)) {
  console.error(`[prerender] Lipseste build-ul SSR: ${caleServer}`)
  process.exit(1)
}

const { render } = await import(pathToFileURL(caleServer).href)
const continut = render()

const html = readFileSync(caleIndex, 'utf-8')
const tinta = '<div id="root"></div>'

if (!html.includes(tinta)) {
  console.error('[prerender] Nu am gasit <div id="root"></div> in dist/index.html')
  process.exit(1)
}

writeFileSync(caleIndex, html.replace(tinta, `<div id="root">${continut}</div>`))

console.log(`[prerender] Continut injectat in dist/index.html (${continut.length} caractere)`)
