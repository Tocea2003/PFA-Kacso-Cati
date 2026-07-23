import { useEffect, useState } from 'react'
import { contact } from '../data/content.js'
import { IconCheck } from './Icons.jsx'

const linkuri = [
  { href: '#servicii', text: 'Servicii' },
  { href: '#experienta', text: 'Experienta' },
  { href: '#despre', text: 'Despre' },
  { href: '#contact', text: 'Contact' },
]

export default function Header() {
  const [meniuDeschis, setMeniuDeschis] = useState(false)
  const [scrollat, setScrollat] = useState(false)

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
            <small>Verificare piese • PFA</small>
          </span>
        </a>

        <nav className={`header__nav ${meniuDeschis ? 'is-open' : ''}`}>
          {linkuri.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMeniuDeschis(false)}>
              {l.text}
            </a>
          ))}
        </nav>

        <button
          className="header__toggle"
          aria-label="Deschide meniul"
          aria-expanded={meniuDeschis}
          onClick={() => setMeniuDeschis((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
