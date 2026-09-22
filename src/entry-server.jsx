// Punct de intrare folosit doar la build, pentru pre-randare (SSG).
// Genereaza HTML-ul static al paginii, ca motoarele de cautare sa vada
// continutul chiar si fara sa ruleze JavaScript.
//
// Atentie: nu importa fisiere CSS aici — stilurile sunt incluse prin main.jsx
// in build-ul de client.
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'
import { intrebari } from './data/content.js'

export function render() {
  return renderToStaticMarkup(<App />)
}

// Datele structurate FAQPage, construite din acelasi `intrebari` care
// randeaza sectiunea. Google cere ca raspunsul din JSON sa existe identic in
// pagina; generandu-le din aceeasi sursa, nu au cum sa se desincronizeze.
export function dateStructurate() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://controlcalitatesibiu.ro/#intrebari',
    mainEntity: intrebari.map((item) => ({
      '@type': 'Question',
      name: item.intrebare,
      acceptedAnswer: { '@type': 'Answer', text: item.raspuns },
    })),
  })
}
