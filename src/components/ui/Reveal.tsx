import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type RevealProps = {
  children: ReactNode
  className?: string
  // Retraso en ms, para escalonar elementos de una lista
  delay?: number
}

// Aparición suave al entrar en pantalla. La animación vive en index.css (.reveal)
// y se desactiva con prefers-reduced-motion.
const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal
