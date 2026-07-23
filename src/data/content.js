// ============================================================
//  CONȚINUT CENTRALIZAT — editează aici textele de pe site.
//  Nu trebuie să modifici componentele pentru a schimba textele.
// ============================================================

// --- Date de contact & date oficiale PFA ---
export const contact = {
  nume: 'Kacso Cati',
  titulatura: 'Persoană Fizică Autorizată',
  descriereScurta: 'Verificare și control calitate produse',
  telefon: '0752 291 659',
  // Numărul în format internațional, fără „+” și fără spații (pentru linkul WhatsApp).
  telefonWhatsApp: '40752291659',
  email: 'kacsocati@yahoo.com',
  oras: 'Cisnădie',
  judet: 'jud. Sibiu',
  adresa: 'Str. Stejarului nr. 16, Cisnădie, jud. Sibiu',
  // Date din certificatul de înregistrare (Registrul Comerțului).
  cui: '58723180',
  caen: 'CAEN 8299 – Activități de servicii suport pentru întreprinderi',
  inregistrata: '27.05.2024',
}

// Valorile afișate ca laitmotiv (din prezentarea PFA).
export const valori = ['Profesionalism', 'Seriozitate', 'Calitate']

// --- Secțiunea Hero ---
export const hero = {
  eyebrow: 'PFA autorizată • Cisnădie, jud. Sibiu',
  titlu: 'Verificare și control calitate produse',
  subtitlu:
    'Peste 20 de ani de experiență în controlul calității, sortarea și verificarea produselor, analiza defectelor și suport pentru procesele de producție — servicii adaptate nevoilor fiecărui client.',
  imagine: '/images/hero.jpg',
}

// --- Servicii ---
export const serviciiSubtitlu =
  'Servicii de sprijin pentru companii din domeniul industrial, realizate cu seriozitate, promptitudine și atenție la standardele de calitate.'

export const servicii = [
  {
    id: 'sortare',
    titlu: 'Sortare și control calitate',
    descriere:
      'Sortarea și controlul calității pieselor și produselor, separarea produselor conforme de neconformități, pe loturi. Experiență inclusiv pe produse complexe, de tip DQ200 TCU.',
    imagine: '/images/serviciu-sortare.jpg',
    icon: 'sort',
  },
  {
    id: 'vizuala',
    titlu: 'Verificare vizuală și dimensională',
    descriere:
      'Verificarea vizuală a produselor și măsurarea dimensiunilor cu instrumente de precizie (șubler, micrometru), conform specificațiilor și toleranțelor cerute.',
    imagine: '/images/serviciu-dimensional.jpg',
    icon: 'ruler',
  },
  {
    id: 'defecte',
    titlu: 'Identificare defecte și neconformități',
    descriere:
      'Analiza defectelor, identificarea neconformităților și a cauzelor acestora, pentru a preveni reapariția lor.',
    imagine: '/images/serviciu-control.jpg',
    icon: 'check',
  },
  {
    id: 'rework',
    titlu: 'Rework și suport producție',
    descriere:
      'Reprelucrarea produselor și suport direct pentru procesele de producție, pentru menținerea fluxului și a standardelor de calitate.',
    imagine: '/images/serviciu-rework.jpg',
    icon: 'tools',
  },
  {
    id: 'documentatie',
    titlu: 'Documentație și raportare calitate',
    descriere:
      'Întocmirea documentației și a rapoartelor de calitate, evidența rezultatelor și a acțiunilor corective aplicate.',
    imagine: '/images/serviciu-rapoarte.jpg',
    icon: 'report',
  },
  {
    id: 'logistica',
    titlu: 'Organizare activități logistice',
    descriere:
      'Organizarea și monitorizarea activităților logistice, a fluxurilor de materiale, a depozitului și a inventarului.',
    imagine: '/images/serviciu-logistica.jpg',
    icon: 'flux',
  },
  {
    id: 'suport',
    titlu: 'Suport calitate pentru companii industriale',
    descriere:
      'Sprijin dedicat pentru departamentele de calitate din companiile industriale, adaptat cerințelor și standardelor fiecărui client.',
    imagine: '/images/serviciu-suport.jpg',
    icon: 'fabrica',
  },
  {
    id: 'reclamatii',
    titlu: 'Gestionarea reclamațiilor',
    descriere:
      'Asistență în gestionarea reclamațiilor interne și externe: analiza cauzelor, urmărirea acțiunilor corective și comunicarea rezultatelor.',
    imagine: '/images/serviciu-reclamatii.jpg',
    icon: 'reclamatii',
  },
]

// --- Experiență (timeline) ---
export const experientaSubtitlu =
  'Peste 20 de ani în domeniul calității, logisticii și managementului proceselor industriale.'

export const experienta = [
  {
    rol: 'Director Calitate și Logistică',
    firma: 'Euchner SRL, Cisnădie',
    perioada: '2016 — Prezent',
    descriere:
      'Coordonez activitățile legate de asigurarea calității și organizarea fluxurilor logistice.',
  },
  {
    rol: 'Auditor de produs',
    firma: 'Continental, Sibiu',
    perioada: '2006 — 2016',
    descriere:
      'Controlul calității, analiza rebuturilor, verificarea și sortarea produselor și identificarea neconformităților.',
  },
  {
    rol: 'Administrator asociație',
    firma: 'Asociația „Tu vei reuși”, Cisnădie',
    perioada: '2025 — Prezent',
    descriere: 'Coordonarea activităților asociației.',
  },
]

// --- Calificări & certificări ---
export const calificari = [
  'ISO 9001',
  'Curs MSA și Statistică',
  'Managementul timpului',
  'Curs electronică',
  'Liceu Tehnologic',
]

// --- Competențe ---
export const competente = [
  'Analiza defectelor',
  'Metodologie 5S',
  'Metodologie 8D',
  'Managementul proceselor',
  'Documente vamă',
  'Inventar materie primă / produse finite',
  'Organizare depozit și magazie',
  'Gestionare reclamații',
]

// --- Text „Despre” (cuvintele ei) ---
export const despre = [
  'Mă numesc Kacso Cati și activez de peste 20 de ani în domeniul calității, logisticii și managementului proceselor industriale.',
  'De-a lungul carierei am acumulat experiență solidă în controlul calității, sortarea și verificarea produselor, analiza defectelor, organizarea logistică și suportul pentru procesele de producție.',
  'Sunt o persoană sociabilă, serioasă, atentă la detalii și orientată către rezultate, cu capacitatea de a învăța rapid și de a mă adapta cerințelor fiecărui client.',
]

export const inchidere =
  'Colaborarea cu PFA Kacso Cati înseamnă servicii de calitate, flexibilitate și respectarea cerințelor specifice fiecărui partener.'

// ============================================================
//  Ajutor: construiește linkul WhatsApp cu mesaj pre-completat.
// ============================================================
export function construiesteLinkWhatsApp({ nume, email, mesaj } = {}) {
  const linii = [
    nume && nume.trim() ? `Bună ziua, sunt ${nume.trim()}.` : 'Bună ziua,',
  ]
  if (email && email.trim()) linii.push(`Email: ${email.trim()}`)
  linii.push('Aș dori o ofertă pentru verificare / control calitate:')
  if (mesaj && mesaj.trim()) linii.push(mesaj.trim())
  return `https://wa.me/${contact.telefonWhatsApp}?text=${encodeURIComponent(linii.join('\n'))}`
}
