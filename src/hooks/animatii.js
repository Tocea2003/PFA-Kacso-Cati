import { useEffect, useRef, useState } from 'react'

// Respecta preferinta utilizatorului de a reduce miscarea.
const miscareRedusa = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Reveal la scroll: intoarce un ref si un flag "vizibil" cand elementul
// intra in ecran. Daca utilizatorul prefera miscare redusa, arata imediat.
export function useReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [vizibil, setVizibil] = useState(false)

  useEffect(() => {
    if (miscareRedusa()) {
      setVizibil(true)
      return
    }
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVizibil(true)
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, vizibil]
}

// Numerele care "urca" de la 0 la tinta, cu easing ease-out (cubic).
// Porneste doar cand `activ` devine true.
export function useCountUp(tinta, activ, durata = 1500) {
  // La pre-randare (fara `window`) pornim direct de la valoarea finala, ca in
  // HTML-ul livrat sa apara „20+”, nu „0+”. In browser animatia ramane de la 0.
  const [valoare, setValoare] = useState(() =>
    typeof window === 'undefined' ? tinta : 0
  )

  useEffect(() => {
    if (!activ) return
    if (miscareRedusa()) {
      setValoare(tinta)
      return
    }
    let raf
    const start = performance.now()
    const pas = (acum) => {
      const t = Math.min((acum - start) / durata, 1)
      const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
      setValoare(Math.round(eased * tinta))
      if (t < 1) raf = requestAnimationFrame(pas)
    }
    raf = requestAnimationFrame(pas)
    return () => cancelAnimationFrame(raf)
  }, [tinta, activ, durata])

  return valoare
}

// Cat din pagina a fost parcurs, ca numar intre 0 si 1. Alimenteaza bara de
// progres din header. Citirea se face in rAF, ca sa nu forteze layout la
// fiecare eveniment de scroll.
export function useProgresScroll() {
  const [progres, setProgres] = useState(0)

  useEffect(() => {
    if (miscareRedusa()) return
    let raf = null

    const masoara = () => {
      raf = null
      const doc = document.documentElement
      const parcurs = doc.scrollHeight - doc.clientHeight
      setProgres(parcurs > 0 ? Math.min(doc.scrollTop / parcurs, 1) : 0)
    }
    const laScroll = () => {
      if (raf === null) raf = requestAnimationFrame(masoara)
    }

    window.addEventListener('scroll', laScroll, { passive: true })
    window.addEventListener('resize', laScroll)
    masoara()
    return () => {
      window.removeEventListener('scroll', laScroll)
      window.removeEventListener('resize', laScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [])

  return progres
}
