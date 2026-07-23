import { experienta } from '../data/content.js'
import { useReveal } from '../hooks/animatii.js'
import Reveal from './Reveal.jsx'

export default function Experienta() {
  const [refTimeline, vizibil] = useReveal({ threshold: 0.2 })

  return (
    <section className="sectiune sectiune--gri" id="experienta">
      <div className="container">
        <Reveal as="h2" className="sectiune-titlu">
          Experienta profesionala
        </Reveal>
        <Reveal as="p" className="sectiune-subtitlu" delay={80}>
          Peste 18 ani in domeniul calitatii, de la tehnician si auditor de produs
          pana la director de calitate.
        </Reveal>

        <div className={`timeline ${vizibil ? 'is-vizibil' : ''}`} ref={refTimeline}>
          {experienta.map((e, i) => (
            <Reveal key={i} variant="left" delay={i * 120} className="timeline-item">
              <span className="timeline-item__perioada">{e.perioada}</span>
              <h3 className="timeline-item__rol">{e.rol}</h3>
              <p className="timeline-item__firma">{e.firma}</p>
              <p className="timeline-item__desc">{e.descriere}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
