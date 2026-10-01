import type { CSSProperties } from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'

// Componente aparte: el progreso cambia en cada frame de scroll y así solo se re-renderiza esta línea,
// no el navbar entero. La posición y la escala viven en index.css (.progreso-scroll).
const ProgresoScroll = () => {
  const progreso = useScrollProgress()

  return (
    <span
      aria-hidden="true"
      className="progreso-scroll absolute bg-neutral-200"
      style={{ '--progreso': progreso } as CSSProperties}
    />
  )
}

export default ProgresoScroll
