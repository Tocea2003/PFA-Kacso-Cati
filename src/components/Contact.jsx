import { useState } from 'react'
import { contact, construiesteLinkWhatsApp } from '../data/content.js'
import { IconPhone, IconMail, IconPin, IconWhatsApp } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [date, setDate] = useState({ nume: '', telefon: '', mesaj: '' })
  const [erori, setErori] = useState({})

  function actualizeaza(e) {
    const { name, value } = e.target
    setDate((d) => ({ ...d, [name]: value }))
    if (erori[name]) setErori((er) => ({ ...er, [name]: undefined }))
  }

  function valideaza() {
    const er = {}
    if (!date.nume.trim()) er.nume = 'Introduceti numele.'
    if (!date.telefon.trim()) er.telefon = 'Introduceti un numar de telefon.'
    if (!date.mesaj.trim()) er.mesaj = 'Descrieti ce piese doriti verificate.'
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
    { icon: <IconPin />, label: 'Locatie', val: `${contact.oras}, ${contact.judet}`, href: null },
  ]

  return (
    <section className="sectiune sectiune--gri" id="contact">
      <div className="container">
        <Reveal as="h2" className="sectiune-titlu">
          Contact
        </Reveal>
        <Reveal as="p" className="sectiune-subtitlu" delay={80}>
          Completati formularul, iar mesajul va fi trimis direct pe WhatsApp cu datele deja scrise.
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info" variant="left">
            <h3>Sa discutam despre proiectul dumneavoastra</h3>
            <p>
              Pentru orice intrebare legata de verificarea, sortarea sau raportarea calitatii
              pieselor, ma puteti contacta direct:
            </p>

            {detalii.map((d) => (
              <div className="contact-detaliu" key={d.label}>
                <span className="contact-detaliu__icon">{d.icon}</span>
                <div>
                  <div className="contact-detaliu__label">{d.label}</div>
                  {d.href ? (
                    <a className="contact-detaliu__val" href={d.href}>
                      {d.val}
                    </a>
                  ) : (
                    <div className="contact-detaliu__val">{d.val}</div>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal variant="right" delay={100}>
            <form className="contact-form" onSubmit={trimite} noValidate>
            <p className="contact-form__nota">
              <IconWhatsApp style={{ width: 18, height: 18, color: '#25d366', flexShrink: 0 }} />
              La apasarea butonului se deschide WhatsApp cu mesajul pre-completat. Mai apasati o
              data „Trimite" in WhatsApp si gata.
            </p>

            <div className={`camp ${erori.nume ? 'camp--eroare' : ''}`}>
              <label htmlFor="nume">Nume *</label>
              <input
                id="nume"
                name="nume"
                type="text"
                value={date.nume}
                onChange={actualizeaza}
                placeholder="Numele dumneavoastra"
              />
              {erori.nume && <div className="camp__eroare">{erori.nume}</div>}
            </div>

            <div className={`camp ${erori.telefon ? 'camp--eroare' : ''}`}>
              <label htmlFor="telefon">Telefon *</label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                value={date.telefon}
                onChange={actualizeaza}
                placeholder="07xx xxx xxx"
              />
              {erori.telefon && <div className="camp__eroare">{erori.telefon}</div>}
            </div>

            <div className={`camp ${erori.mesaj ? 'camp--eroare' : ''}`}>
              <label htmlFor="mesaj">Ce piese doriti verificate? *</label>
              <textarea
                id="mesaj"
                name="mesaj"
                value={date.mesaj}
                onChange={actualizeaza}
                placeholder="Descrieti tipul pieselor, cantitatea si ce fel de verificare aveti nevoie..."
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
