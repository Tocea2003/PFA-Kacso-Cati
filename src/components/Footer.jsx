import { contact } from '../data/content.js'

export default function Footer() {
  const an = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            {contact.nume}
            <small>{contact.titulatura}</small>
          </div>

          <div className="footer__contact">
            <div>
              <a href={`tel:+${contact.telefonWhatsApp}`}>{contact.telefon}</a>
            </div>
            <div>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              {contact.adresa} • {contact.codPostal}
            </div>
          </div>
        </div>

        <div className="footer__jos">
          © {an} {contact.nume} — PFA. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  )
}
