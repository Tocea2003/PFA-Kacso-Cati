import { useState } from 'react'
import { contact, construiesteLinkWhatsApp } from '../data/content.js'
import { IconPhone, IconMail, IconPin, IconWhatsApp } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [date, setDate] = useState({ nume: '', email: '', mesaj: '' })
  const [erori, setErori] = useState({})

  function actualizeaza(e) {
    const { name, value } = e.target
    setDate((d) => ({ ...d, [name]: value }))
    if (erori[name]) setErori((er) => ({ ...er, [name]: undefined }))
  }

  function valideaza() {
    const er = {}
    if (!date.nume.trim()) er.nume = 'Introduceți numele.'
    if (date.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(date.email.trim()))
      er.email = 'Adresa de email nu pare validă.'
    if (!date.mesaj.trim()) er.mesaj = 'Descrieți ce produse doriți verificate.'
    return er
  }

  function trimite(e) {
    e.preventDefault()
    const er = valideaza()
    if (Object.keys(er).length > 0) {
      setErori(er)
      return
    }
    const link = construiesteLinkWhatsApp(date)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const detalii = [
    { icon: <IconPhone />, label: 'Telefon', val: contact.telefon, href: `tel:+${contact.telefonWhatsApp}` },
    { icon: <IconMail />, label: 'Email', val: contact.email, href: `mailto:${contact.email}` },
    {
      icon: <IconPin />,
      label: 'Sediu',
      val: contact.adresa,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.adresa)}`,
      extern: true,
      titlu: 'Vezi adresa pe Google Maps',
    },
  ]

  return (
    <section className="sectiune sectiune--gri" id="contact">
      <div className="container">
        <Reveal as="h2" className="sectiune-titlu">
          Contact
        </Reveal>
        <Reveal as="p" className="sectiune-subtitlu" delay={80}>
          Completați formularul, iar mesajul va fi trimis direct pe WhatsApp cu datele deja scrise.
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info" variant="left">
            <h3>Să discutăm despre nevoile dumneavoastră</h3>
            <p>
              Pentru orice întrebare legată de verificarea, sortarea sau raportarea calității
              produselor, mă puteți contacta direct:
            </p>

            {detalii.map((d) => (
              <div className="contact-detaliu" key={d.label}>
                <span className="contact-detaliu__icon">{d.icon}</span>
                <div>
                  <div className="contact-detaliu__label">{d.label}</div>
                  {d.href ? (
                    <a
                      className="contact-detaliu__val"
                      href={d.href}
                      title={d.titlu}
                      {...(d.extern
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {d.val}
                    </a>
                  ) : (
                    <div className="contact-detaliu__val">{d.val}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-oficial">
              <span>PFA înregistrată la Registrul Comerțului</span>
              <div>
                <strong>CUI:</strong> {contact.cui} &nbsp;•&nbsp; înregistrată {contact.inregistrata}
              </div>
              <div>{contact.caen}</div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <form className="contact-form" onSubmit={trimite} noValidate>
              <p className="contact-form__nota">
                <IconWhatsApp style={{ width: 18, height: 18, color: '#25d366', flexShrink: 0 }} />
                La apăsarea butonului se deschide WhatsApp cu mesajul pre-completat. Mai apăsați o
                dată „Trimite” în WhatsApp și gata.
              </p>

              <div className={`camp ${erori.nume ? 'camp--eroare' : ''}`}>
                <label htmlFor="nume">Nume *</label>
                <input
                  id="nume"
                  name="nume"
                  type="text"
                  value={date.nume}
                  onChange={actualizeaza}
                  placeholder="Numele dumneavoastră"
                />
                {erori.nume && <div className="camp__eroare">{erori.nume}</div>}
              </div>

              <div className={`camp ${erori.email ? 'camp--eroare' : ''}`}>
                <label htmlFor="email">Email <span className="camp__opt">(opțional)</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={date.email}
                  onChange={actualizeaza}
                  placeholder="nume@exemplu.ro"
                />
                {erori.email && <div className="camp__eroare">{erori.email}</div>}
              </div>

              <div className={`camp ${erori.mesaj ? 'camp--eroare' : ''}`}>
                <label htmlFor="mesaj">Ce produse doriți verificate? *</label>
                <textarea
                  id="mesaj"
                  name="mesaj"
                  value={date.mesaj}
                  onChange={actualizeaza}
                  placeholder="Descrieți tipul produselor, cantitatea și ce fel de verificare aveți nevoie..."
                />
                {erori.mesaj && <div className="camp__eroare">{erori.mesaj}</div>}
              </div>

              <button type="submit" className="btn btn--wa">
                <IconWhatsApp style={{ width: 20, height: 20 }} />
                Trimite pe WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
