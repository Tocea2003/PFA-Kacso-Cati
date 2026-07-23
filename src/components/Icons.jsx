// Iconite SVG inline (fara dependinte externe).
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5l5 5 11-12" />
    </svg>
  )
}

export function IconSort(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3" />
    </svg>
  )
}

export function IconRuler(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="8" width="20" height="8" rx="1.5" />
      <path d="M6 8v3M10 8v4M14 8v3M18 8v4" />
    </svg>
  )
}

export function IconReport(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6M9 9h1" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 7 10-7" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1A7.9 7.9 0 0 0 12 19.9a7.94 7.94 0 0 0 5.6-13.6zM12 18.5a6.6 6.6 0 0 1-3.4-.9l-.24-.15-2.5.66.67-2.43-.16-.25A6.59 6.59 0 1 1 12 18.5zm3.6-4.94c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.5.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-2.68-2.34c-.2-.35.2-.32.58-1.08a.37.37 0 0 0 0-.35c0-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .8 2 8.68 8.68 0 0 0 3.33 2.94c1.24.53 1.73.58 2.35.49a2 2 0 0 0 1.32-.93 1.63 1.63 0 0 0 .11-.93c-.04-.09-.17-.14-.37-.24z" />
    </svg>
  )
}

export function IconImage(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  )
}

export function IconAward(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.2 12.5L7 22l5-3 5 3-1.2-9.5" />
    </svg>
  )
}

export function IconTools(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.8 2.8 0 0 1-4-4l9-9z" />
      <path d="M9 8l2 2" />
    </svg>
  )
}

export function IconFlux(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="6" height="5" rx="1" />
      <rect x="15" y="4" width="6" height="5" rx="1" />
      <rect x="9" y="15" width="6" height="5" rx="1" />
      <path d="M6 9v3h12V9M12 12v3" />
    </svg>
  )
}

// Selector pentru iconita serviciului dupa cheia din content.js
export function IconServiciu({ tip, ...props }) {
  switch (tip) {
    case 'check':
      return <IconCheck {...props} />
    case 'sort':
      return <IconSort {...props} />
    case 'ruler':
      return <IconRuler {...props} />
    case 'report':
      return <IconReport {...props} />
    case 'tools':
      return <IconTools {...props} />
    case 'flux':
      return <IconFlux {...props} />
    default:
      return <IconCheck {...props} />
  }
}
