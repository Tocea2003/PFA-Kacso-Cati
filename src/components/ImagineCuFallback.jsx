import { useState } from 'react'
import { IconImage } from './Icons.jsx'

// Afiseaza o imagine in doua formate: WebP pentru browserele moderne (mult mai
// mic) si JPEG ca rezerva. Daca fisierul lipseste, arata un placeholder
// stilizat cu eticheta, in loc de imagine stricata.
//
// `src` este calea FARA extensie (ex: /images/hero); extensiile le pune
// componenta. `latime` si `inaltime` sunt dimensiunile reale ale fisierului si
// sunt obligatorii: fara ele pagina isi schimba layoutul cand se incarca pozele.
export default function ImagineCuFallback({
  src,
  alt,
  eticheta,
  latime,
  inaltime,
  prioritate = false,
}) {
  const [eroare, setEroare] = useState(false)
  // Fade la incarcare, ca poza sa nu "pocneasca" peste fundalul gol.
  // Poza hero (`prioritate`) e exceptata: e elementul LCP, iar un fade pe ea
  // ar intarzia momentul in care browserul o considera pictata.
  const [incarcata, setIncarcata] = useState(false)

  if (eroare) {
    return (
      <div className="img-fallback" role="img" aria-label={alt}>
        <IconImage />
        <span>{eticheta || 'Poza demo'}</span>
      </div>
    )
  }

  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        className={
          prioritate ? undefined : `imagine-incarcabila ${incarcata ? 's-a-incarcat' : ''}`
        }
        src={`${src}.jpg`}
        alt={alt}
        width={latime}
        height={inaltime}
        decoding="async"
        loading={prioritate ? 'eager' : 'lazy'}
        fetchpriority={prioritate ? 'high' : undefined}
        ref={(el) => {
          // Daca poza e deja in cache, `load` s-a declansat inainte sa apucam
          // sa ascultam. `complete` acopera cazul asta.
          if (el?.complete) setIncarcata(true)
        }}
        onLoad={() => setIncarcata(true)}
        onError={() => setEroare(true)}
      />
    </picture>
  )
}
