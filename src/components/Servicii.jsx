import { servicii, serviciiSubtitlu, dimensiuniPoze } from '../data/content.js'
import ImagineCuFallback from './ImagineCuFallback.jsx'
import { IconServiciu } from './Icons.jsx'
import AntetSectiune from './AntetSectiune.jsx'
import Reveal from './Reveal.jsx'

export default function Servicii() {
  return (
    <section className="sectiune sectiune--alb" id="servicii">
      <div className="container">
        <AntetSectiune numar="01" titlu="Servicii" subtitlu={serviciiSubtitlu} />

        <div className="servicii__grid">
          {servicii.map((s, i) => (
            <Reveal key={s.id} variant="up" delay={i * 90}>
              <article className="serviciu-card">
                <div className="serviciu-card__media">
                  <div className="serviciu-card__poza">
                    <ImagineCuFallback
                      src={s.imagine}
                      alt={s.titlu}
                      eticheta="Poza demo"
                      latime={dimensiuniPoze.serviciu.latime}
                      inaltime={dimensiuniPoze.serviciu.inaltime}
                    />
                  </div>
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
