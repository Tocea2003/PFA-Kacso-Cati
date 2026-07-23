import { despre, inchidere, calificari, competente } from '../data/content.js'
import { IconAward, IconTools } from './Icons.jsx'
import ImagineCuFallback from './ImagineCuFallback.jsx'
import Reveal from './Reveal.jsx'

export default function Despre() {
  return (
    <section className="sectiune sectiune--alb" id="despre">
      <div className="container">
        <Reveal as="h2" className="sectiune-titlu">
          Despre
        </Reveal>

        <div className="despre__grid">
          <Reveal className="despre__text" variant="left">
            <figure className="despre__profil">
              <ImagineCuFallback
                src={`${import.meta.env.BASE_URL}images/profil.jpeg`}
                alt="Kacso Cati"
                eticheta="Poză de profil"
              />
              <figcaption>Kacso Cati</figcaption>
            </figure>
            {despre.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="despre__inchidere">{inchidere}</p>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="despre__box">
              <h3>
                <IconAward style={{ width: 20, height: 20, color: 'var(--albastru-mediu)' }} />
                Calificări &amp; certificări
              </h3>
              <div className="tag-lista">
                {calificari.map((c) => (
                  <span className="tag tag--accent" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="despre__box">
              <h3>
                <IconTools style={{ width: 20, height: 20, color: 'var(--albastru-mediu)' }} />
                Competențe
              </h3>
              <div className="tag-lista">
                {competente.map((c) => (
                  <span className="tag" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
