// Punct de intrare folosit doar la build, pentru pre-randare (SSG).
// Genereaza HTML-ul static al paginii, ca motoarele de cautare sa vada
// continutul chiar si fara sa ruleze JavaScript.
//
// Atentie: nu importa fisiere CSS aici — stilurile sunt incluse prin main.jsx
// in build-ul de client.
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToStaticMarkup(<App />)
}
