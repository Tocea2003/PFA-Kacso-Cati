import { servicii, serviciiSubtitlu } from '../data/content.js'
import ImagineCuFallback from './ImagineCuFallback.jsx'
import { IconServiciu } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Servicii() {
  return (
    <section className="sectiune sectiune--alb" id="servicii">
      <div className="container">
        <Reveal as="h2" className="sectiune-titlu">
          Servicii
        </Reveal>
        <Reveal as="p" className="sectiune-subtitlu" delay={80}>
          {serviciiSubtitlu}
        </Reveal>

        <div className="servicii__grid">
          {servicii.map((s, i) => (
            <Reveal key={s.id} variant="up" delay={i * 90}>
              <article className="serviciu-card">
                <div className="serviciu-card__media">
                  <ImagineCuFallback src={s.imagine} alt={s.titlu} eticheta="Poza demo" />
                  <span className="serviciu-card__icon">
                    <IconServiciu tip={s.icon} />
                  </span>
                </div>
                <div className="serviciu-card__body">
                  <h3 className="serviciu-card__titlu">{s.titlu}</h3>
                  <p className="serviciu-card__desc">{s.descriere}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
