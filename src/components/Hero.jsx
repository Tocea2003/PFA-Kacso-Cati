import { hero, contact, construiesteLinkWhatsApp } from '../data/content.js'
import ImagineCuFallback from './ImagineCuFallback.jsx'
import { IconWhatsApp } from './Icons.jsx'

export default function Hero() {
  const linkWA = construiesteLinkWhatsApp({ nume: '', telefon: '', mesaj: '' })

  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <ImagineCuFallback
          src={hero.imagine}
          alt="Control calitate piese in mediu industrial"
          eticheta="Poza demo — hero"
          prioritate
        />
      </div>
      <div className="hero__overlay"></div>

      <div className="hero__forme" aria-hidden="true">
        <span className="forma forma--1"></span>
        <span className="forma forma--2"></span>
        <span className="forma forma--3"></span>
      </div>

      <div className="container hero__content">
        <span className="hero__eyebrow">{hero.eyebrow}</span>
        <h1 className="hero__titlu">
          {hero.titlu} <br />
          <span className="hero__nume">{contact.nume}</span>
        </h1>
        <p className="hero__subtitlu">{hero.subtitlu}</p>
        <div className="hero__actiuni">
          <a
            className="btn btn--wa"
            href={linkWA}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp style={{ width: 20, height: 20 }} />
            Scrie pe WhatsApp
          </a>
          <a className="btn btn--contur" href="#servicii">
            Vezi serviciile
          </a>
        </div>
      </div>
    </section>
  )
}
