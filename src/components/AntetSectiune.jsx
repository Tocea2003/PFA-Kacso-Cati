import Reveal from './Reveal.jsx'

// Antetul standard al unei sectiuni: indicativ numerotat, titlu si subtitlu.
// Numarul si rigla de sub titlu se animeaza pornind de la starea `is-vizibil`
// pe care Reveal o pune pe container (vezi animatii.css).
export default function AntetSectiune({ numar, titlu, subtitlu }) {
  return (
    <>
      <Reveal as="div" className="sectiune-antet">
        <span className="sectiune-numar eticheta-tehnica">{numar}</span>
        <h2 className="sectiune-titlu">{titlu}</h2>
      </Reveal>
      {subtitlu && (
        <Reveal as="p" className="sectiune-subtitlu" delay={70}>
          {subtitlu}
        </Reveal>
      )}
    </>
  )
}
