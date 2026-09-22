import { intrebari, intrebariSubtitlu } from '../data/content.js'
import AntetSectiune from './AntetSectiune.jsx'
import Reveal from './Reveal.jsx'

// Intrebari frecvente. Deschise implicit (`open`): raspunsurile trebuie sa fie
// vizibile in pagina, nu ascunse, ca datele structurate FAQPage sa fie valide.
// <details> ramane functional si fara JS.
export default function Intrebari() {
  return (
    <section className="sectiune sectiune--alb" id="intrebari">
      <div className="container">
        <AntetSectiune numar="04" titlu="Întrebări frecvente" subtitlu={intrebariSubtitlu} />

        <div className="faq">
          {intrebari.map((item, i) => (
            <Reveal key={item.intrebare} variant="up" delay={i * 50}>
              <details className="faq__item" open>
                <summary className="faq__intrebare">
                  <h3>{item.intrebare}</h3>
                  <span className="faq__semn" aria-hidden="true"></span>
                </summary>
                <p className="faq__raspuns">{item.raspuns}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
