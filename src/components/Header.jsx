import { useEffect, useState } from 'react'
import { contact } from '../data/content.js'
import { useProgresScroll } from '../hooks/animatii.js'
import { IconCheck } from './Icons.jsx'

const linkuri = [
  { href: '#servicii', text: 'Servicii' },
  { href: '#experienta', text: 'Experiență' },
  { href: '#despre', text: 'Despre' },
  { href: '#intrebari', text: 'Întrebări' },
  { href: '#contact', text: 'Contact' },
]

export default function Header() {
  const [meniuDeschis, setMeniuDeschis] = useState(false)
  const [scrollat, setScrollat] = useState(false)
  const progres = useProgresScroll()

  useEffect(() => {
    const laScroll = () => setScrollat(window.scrollY > 20)
    window.addEventListener('scroll', laScroll, { passive: true })
    laScroll()
    return () => window.removeEventListener('scroll', laScroll)
  }, [])

  return (
    <header className={`header ${scrollat ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo" onClick={() => setMeniuDeschis(false)}>
          <span className="header__logo-badge">
            <IconCheck style={{ color: 'var(--albastru-accent)' }} />
          </span>
          <span>
            {contact.nume}
            <small>Control calitate • PFA</small>
          </span>
        </a>

        <nav
          id="meniu-principal"
          className={`header__nav ${meniuDeschis ? 'is-open' : ''}`}
          aria-label="Meniu principal"
        >
          {linkuri.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMeniuDeschis(false)}>
              {l.text}
            </a>
          ))}
        </nav>

        <button
          className="header__toggle"
          type="button"
          aria-label={meniuDeschis ? 'Închide meniul' : 'Deschide meniul'}
          aria-controls="meniu-principal"
          aria-expanded={meniuDeschis}
          onClick={() => setMeniuDeschis((v) => !v)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        className="header__progres"
        style={{ width: `${progres * 100}%` }}
        aria-hidden="true"
      />
    </header>
  )
}
