import { useReveal, useCountUp } from '../hooks/animatii.js'

const statistici = [
  { numar: 18, sufix: '+', eticheta: 'Ani de experienta' },
  { numar: 4, sufix: '', eticheta: 'Servicii oferite' },
  { text: 'ISO 9001', eticheta: 'Standard de calitate' },
  { text: 'DQ200 TCU', eticheta: 'Specializare sortare' },
]

function StatNumar({ numar, sufix, activ }) {
  const valoare = useCountUp(numar, activ)
  return (
    <span>
      {valoare}
      {sufix}
    </span>
  )
}

export default function Statistici() {
  const [ref, vizibil] = useReveal({ threshold: 0.3 })

  return (
    <section className="statistici" ref={ref} aria-label="Cifre cheie">
      <div className="container statistici__grid">
        {statistici.map((s, i) => (
          <div
            className={`stat ${vizibil ? 'is-vizibil' : ''}`}
            key={i}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="stat__numar">
              {s.numar != null ? (
                <StatNumar numar={s.numar} sufix={s.sufix} activ={vizibil} />
              ) : (
                s.text
              )}
            </div>
            <div className="stat__eticheta">{s.eticheta}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
