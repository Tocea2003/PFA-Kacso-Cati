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
  inregistrata: '27.05.2026',
}

// Valorile afișate ca laitmotiv (din prezentarea PFA).
export const valori = ['Profesionalism', 'Seriozitate', 'Calitate']

// Prefix pentru imagini. Necesar ca site-ul să funcționeze și pe GitHub Pages,
// unde e servit dintr-un subfolder (/nume-repo/). Local, BASE_URL este „/”.
// Numele e FĂRĂ extensie — componenta de imagine alege .webp sau .jpg.
const poza = (nume) => `${import.meta.env.BASE_URL}images/${nume}`

// Dimensiunile reale ale fișierelor generate de scripts/optimizeaza-imagini.mjs.
// Sunt trimise ca width/height ca pagina să nu „sară” la încărcarea pozelor.
export const dimensiuniPoze = {
  hero: { latime: 1600, inaltime: 1067 },
  serviciu: { latime: 800, inaltime: 400 },
  profil: { latime: 400, inaltime: 400 },
}

// --- Secțiunea Hero ---
export const hero = {
  eyebrow: 'PFA autorizată • Cisnădie, jud. Sibiu',
  titlu: 'Control calitate produse în Sibiu',
  subtitlu:
    'Peste 20 de ani de experiență în controlul calității, sortarea și verificarea produselor, analiza defectelor și suport pentru procesele de producție. Servicii pentru companii din Sibiu, Cisnădie și împrejurimi, adaptate nevoilor fiecărui client.',
  imagine: poza('hero'),
}

// --- Servicii ---
export const serviciiSubtitlu =
  'Servicii de control calitate pentru companii din domeniul industrial din județul Sibiu, realizate cu seriozitate, promptitudine și atenție la standardele de calitate.'

export const servicii = [
  {
    id: 'sortare',
    titlu: 'Sortare și control calitate',
    descriere:
      'Sortarea și controlul calității pieselor și produselor, separarea produselor conforme de neconformități, pe loturi. Experiență inclusiv pe produse complexe, de tip DQ200 TCU.',
    imagine: poza('DSG11-scaled'),
    icon: 'sort',
  },
  {
    id: 'vizuala',
    titlu: 'Verificare vizuală și dimensională',
    descriere:
      'Verificarea vizuală a produselor și măsurarea dimensiunilor cu instrumente de precizie (șubler, micrometru), conform specificațiilor și toleranțelor cerute.',
    imagine: poza('serviciu-dimensional'),
    icon: 'ruler',
  },
  {
    id: 'defecte',
    titlu: 'Identificare defecte și neconformități',
    descriere:
      'Analiza defectelor, identificarea neconformităților și a cauzelor acestora, pentru a preveni reapariția lor.',
    imagine: poza('serviciu-control'),
    icon: 'check',
  },
  {
    id: 'rework',
    titlu: 'Rework și suport producție',
    descriere:
      'Reprelucrarea produselor și suport direct pentru procesele de producție, pentru menținerea fluxului și a standardelor de calitate.',
    imagine: poza('serviciu-rework'),
    icon: 'tools',
  },
  {
    id: 'documentatie',
    titlu: 'Documentație și raportare calitate',
    descriere:
      'Întocmirea documentației și a rapoartelor de calitate, evidența rezultatelor și a acțiunilor corective aplicate.',
    imagine: poza('serviciu-rapoarte'),
    icon: 'report',
  },
  {
    id: 'logistica',
    titlu: 'Organizare activități logistice',
    descriere:
      'Organizarea și monitorizarea activităților logistice, a fluxurilor de materiale, a depozitului și a inventarului.',
    imagine: poza('serviciu-logistica'),
    icon: 'flux',
  },
  {
    id: 'suport',
    titlu: 'Suport calitate pentru companii industriale',
    descriere:
      'Sprijin dedicat pentru departamentele de calitate din companiile industriale, adaptat cerințelor și standardelor fiecărui client.',
    imagine: poza('serviciu-suport'),
    icon: 'fabrica',
  },
  {
    id: 'reclamatii',
    titlu: 'Gestionarea reclamațiilor',
    descriere:
      'Asistență în gestionarea reclamațiilor interne și externe: analiza cauzelor, urmărirea acțiunilor corective și comunicarea rezultatelor.',
    imagine: poza('serviciu-reclamatii'),
    icon: 'reclamatii',
  },
]

// --- Zona deservită (relevanță locală pentru căutări de tip „control calitate Sibiu”) ---
export const zonaDeservita = {
  intro:
    'Lucrez la sediul clientului sau la punctul de lucru convenit, pentru companii din județul Sibiu:',
  localitati: [
    'Sibiu',
    'Cisnădie',
    'Șelimbăr',
    'Cristian',
    'Ocna Sibiului',
    'Avrig',
    'Mediaș',
    'Agnita',
  ],
  nota: 'Pentru proiecte mai ample, deplasarea în alte județe se poate discuta.',
}

// --- Întrebări frecvente ---
// Răspunsurile de aici ajung și în datele structurate (FAQPage), generate la
// build din acest fișier — vezi src/entry-server.jsx. Deci se scriu o
// singură dată: textul de pe pagină și cel trimis către Google nu pot diverge.
export const intrebariSubtitlu =
  'Cele mai frecvente întrebări primite de la companiile din Sibiu care externalizează controlul calității.'

export const intrebari = [
  {
    intrebare: 'Ce înseamnă, concret, serviciul de control calitate produse?',
    raspuns:
      'Verific produsele bucată cu bucată sau pe eșantion, vizual și dimensional, separ piesele conforme de cele cu neconformități și predau lotul însoțit de evidența rezultatelor. Unde este nevoie, se adaugă reprelucrarea (rework) pieselor recuperabile.',
  },
  {
    intrebare: 'Lucrați la sediul clientului sau produsele trebuie transportate?',
    raspuns:
      'Lucrez la sediul clientului sau la punctul de lucru convenit, ca produsele să nu iasă din fluxul dumneavoastră. Deplasarea se face în Sibiu, Cisnădie și în restul județului Sibiu.',
  },
  {
    intrebare: 'În ce localități din județul Sibiu vă deplasați?',
    raspuns:
      'Sibiu, Cisnădie, Șelimbăr, Cristian, Ocna Sibiului, Avrig, Mediaș și Agnita. Pentru proiecte mai ample, deplasarea în alte județe se poate discuta.',
  },
  {
    intrebare: 'Ce tipuri de produse verificați?',
    raspuns:
      'Piese și subansamble industriale, inclusiv produse complexe din domeniul auto și electronic — am experiență pe verificarea unităților de tip DQ200 TCU. Cerințele exacte se stabilesc pe baza specificației și a desenului dumneavoastră.',
  },
  {
    intrebare: 'Ce instrumente de măsurare folosiți la verificarea dimensională?',
    raspuns:
      'Instrumente de precizie uzuale în producție — șubler și micrometru — plus calibrele și dispozitivele de verificare puse la dispoziție de client, conform toleranțelor din specificație.',
  },
  {
    intrebare: 'Primesc raport de calitate la finalul acțiunii?',
    raspuns:
      'Da. Întocmesc documentația și rapoartele de calitate, cu evidența rezultatelor pe loturi și a acțiunilor corective aplicate. Am experiență în metodologia 8D și în analiza cauzelor pentru reclamații interne și externe.',
  },
  {
    intrebare: 'Cât costă o acțiune de sortare sau de verificare?',
    raspuns:
      'Tariful se stabilește în funcție de tipul produsului, volumul lotului, durata acțiunii și locul de desfășurare. Scrieți-mi pe WhatsApp sau prin formularul de pe pagină cu aceste detalii și primiți o ofertă.',
  },
  {
    intrebare: 'Puteți prelua o acțiune de sortare urgentă?',
    raspuns:
      'Disponibilitatea pentru acțiuni urgente se confirmă la solicitare, în funcție de programul curent. Cel mai rapid răspuns îl primiți pe WhatsApp, la 0752 291 659.',
  },
]

// --- Experiență (timeline) ---
export const experientaSubtitlu =
  'Peste 20 de ani în domeniul calității, logisticii și managementului proceselor industriale.'

export const experienta = [
  {
    rol: 'Administrator asociație',
    firma: 'Asociația „Tu vei reuși”, Cisnădie',
    perioada: '2025 — Prezent',
    descriere: 'Coordonarea activităților asociației.',
  },
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
