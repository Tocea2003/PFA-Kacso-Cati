import { useState } from 'react'
import { IconImage } from './Icons.jsx'

// Afiseaza o imagine; daca fisierul lipseste (nu s-a pus inca poza reala),
// arata un placeholder stilizat cu eticheta, in loc de imagine stricata.
export default function ImagineCuFallback({ src, alt, eticheta, prioritate = false }) {
  const [eroare, setEroare] = useState(false)

  if (eroare) {
    return (
      <div className="img-fallback" role="img" aria-label={alt}>
        <IconImage />
        <span>{eticheta || 'Poza demo'}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={prioritate ? 'eager' : 'lazy'}
      onError={() => setEroare(true)}
    />
  )
}
