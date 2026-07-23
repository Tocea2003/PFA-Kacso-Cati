import { useReveal } from '../hooks/animatii.js'

// Ambalaj care aplica o animatie de aparitie la scroll.
// variant: 'up' | 'left' | 'right' | 'zoom'
export default function Reveal({
  children,
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  ...rest
}) {
  const [ref, vizibil] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${vizibil ? 'is-vizibil' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
