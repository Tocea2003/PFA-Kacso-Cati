// ============================================================
//  CONTINUT CENTRALIZAT — editeaza aici textele de pe site.
//  Nu trebuie sa modifici componentele pentru a schimba textele.
// ============================================================

// --- Date de contact ---
export const contact = {
  nume: 'Kacso Cati',
  titulatura: 'PFA — Verificare si control calitate piese',
  telefon: '0752 291 659',
  // Numarul in format international, fara "+" si fara spatii (pentru linkul WhatsApp).
  telefonWhatsApp: '40752291659',
  email: 'kacsocati@yahoo.com',
  oras: 'Cisnadie',
  judet: 'jud. Sibiu',
  codPostal: '555300',
  adresa: 'Str. Stejarului, Cisnadie, jud. Sibiu',
}

// --- Sectiunea Hero ---
export const hero = {
  titlu: 'Verificare si control calitate piese',
  subtitlu:
    'Peste 18 ani de experienta in controlul calitatii si audit de produs in industria auto. Servicii profesionale de verificare, sortare si raportare pentru piese si componente.',
  imagine: '/images/hero.jpg',
}

// --- Servicii ---
export const servicii = [
  {
    id: 'control',
    titlu: 'Control calitate piese',
    descriere:
      'Verificarea calitatii pieselor conform specificatiilor si desenelor tehnice. Identificarea si separarea neconformitatilor.',
    imagine: '/images/serviciu-control.jpg',
    icon: 'check',
  },
  {
    id: 'sortare',
    titlu: 'Sortare si triere piese',
    descriere:
      'Sortarea si trierea pieselor pe loturi, separarea pieselor conforme de rebuturi. Experienta specifica pe produse DQ200 TCU (unitate de control transmisie DSG).',
    imagine: '/images/serviciu-sortare.jpg',
    icon: 'sort',
  },
  {
    id: 'dimensional',
    titlu: 'Inspectie dimensionala',
    descriere:
      'Masurarea si verificarea dimensiunilor pieselor cu instrumente de precizie (subler, micrometru) conform tolerantelor cerute.',
    imagine: '/images/serviciu-dimensional.jpg',
    icon: 'ruler',
  },
  {
    id: 'rapoarte',
    titlu: 'Rapoarte de calitate',
    descriere:
      'Intocmirea rapoartelor de calitate si a documentatiei aferente: analiza defectelor, metodologie 5S si 8D, evidenta rezultatelor.',
    imagine: '/images/serviciu-rapoarte.jpg',
    icon: 'report',
  },
]

// --- Experienta (timeline) ---
export const experienta = [
  {
    rol: 'Director calitate si logistica',
    firma: 'Euchner SRL, Cisnadie',
    perioada: '2016 — Prezent',
    descriere: 'Asigurarea calitatii si coordonarea activitatilor de logistica.',
  },
  {
    rol: 'Auditor de produs / Tehnician calitate',
    firma: 'Continental, Sibiu',
    perioada: '2006 — 2016',
    descriere:
      'Controlul calitatii si analiza rebuturilor, verificarea si sortarea pieselor — sarcini principale.',
  },
  {
    rol: 'Administrator asociatie',
    firma: 'Asociatia "Tu vei reusi", Cisnadie',
    perioada: '2025 — Prezent',
    descriere: 'Coordonarea activitatilor asociatiei.',
  },
]

// --- Calificari & certificari ---
export const calificari = [
  'ISO 9001',
  'Curs MSA si Statistica',
  'Managementul timpului',
  'Curs electronica',
  'Liceu Tehnologic',
]

// --- Competente ---
export const competente = [
  'Analiza defectelor',
  'Metodologie 5S',
  'Metodologie 8D',
  'Documente vama',
  'Managementul deseurilor',
  'Inventar materie prima / produse finite',
  'Organizare depozit si magazie',
  'Microsoft Office',
]

// --- Text scurt "Despre" ---
export const despre =
  'Sunt o persoana sociabila, increzatoare si determinata, care invata repede. Cu peste 18 ani de experienta in domeniul calitatii — de la tehnician si auditor de produs pana la director de calitate — ofer servicii de incredere pentru verificarea, sortarea si raportarea calitatii pieselor.'

// ============================================================
//  Ajutor: construieste linkul WhatsApp cu mesaj pre-completat.
// ============================================================
export function construiesteLinkWhatsApp({ nume, telefon, mesaj }) {
  const text =
    `Buna ziua, sunt ${nume || '(nume)'} (${telefon || '(telefon)'}).\n` +
    `As dori verificare piese:\n${mesaj || ''}`
  return `https://wa.me/${contact.telefonWhatsApp}?text=${encodeURIComponent(text)}`
}
