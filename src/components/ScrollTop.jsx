import { useEffect, useState } from 'react'

// Buton flotant "inapoi sus", apare dupa ce derulezi in jos.
// Cat timp e invizibil il scot din ordinea de Tab (tabIndex -1), ca sa nu
// ajunga tastatura pe un buton pe care nu-l vede nimeni.
export default function ScrollTop() {
  const [vizibil, setVizibil] = useState(false)

  useEffect(() => {
    const laScroll = () => setVizibil(window.scrollY > 600)
    window.addEventListener('scroll', laScroll, { passive: true })
    laScroll()
    return () => window.removeEventListener('scroll', laScroll)
  }, [])

  return (
    <button
      className={`scroll-top ${vizibil ? 'is-vizibil' : ''}`}
      type="button"
      aria-label="Înapoi sus"
      tabIndex={vizibil ? 0 : -1}
      aria-hidden={vizibil ? undefined : 'true'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
