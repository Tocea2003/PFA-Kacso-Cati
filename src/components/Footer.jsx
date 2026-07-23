import { contact, valori } from '../data/content.js'

export default function Footer() {
  const an = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__logo">
              {contact.nume}
              <small>PFA — {contact.descriereScurta}</small>
            </div>
            <div className="footer__valori">
              {valori.map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
          </div>

          <div className="footer__contact">
            <div>
              <a href={`tel:+${contact.telefonWhatsApp}`}>{contact.telefon}</a>
            </div>
            <div>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>{contact.adresa}</div>
            <div className="footer__oficial">
              CUI {contact.cui} • înregistrată {contact.inregistrata}
            </div>
          </div>
        </div>

        <div className="footer__jos">
          © {an} {contact.nume} — Persoană Fizică Autorizată. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  )
}
