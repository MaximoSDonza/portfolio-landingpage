import type { ReactNode } from 'react'

// Título chico con línea inferior, para columnas dentro de una sección (categorías, formación, cursos).
const TituloColumna = ({ children }: { children: ReactNode }) => (
  <h3 className="border-b border-neutral-700 pb-3 text-sm font-medium text-neutral-400">{children}</h3>
)

export default TituloColumna
