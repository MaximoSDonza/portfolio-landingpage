import type { ReactNode } from 'react'

type EnlaceExternoProps = {
  href: string
  children: ReactNode
  // Ícono antes del texto (clases de Font Awesome)
  icon?: string
  // Flecha de "abre otro sitio" después del texto
  flecha?: boolean
}

// Si la URL de la data viene sin protocolo ("www.linkedin.com/..."), se completa con https://.
// Sin esto el navegador la toma como una ruta dentro del propio sitio.
const normalizarUrl = (url: string) => (/^[a-z][a-z\d+.-]*:/i.test(url) ? url : `https://${url.replace(/^\/+/, '')}`)

const EnlaceExterno = ({ href, children, icon, flecha = false }: EnlaceExternoProps) => (
  <a href={normalizarUrl(href)} target="_blank" rel="noopener noreferrer" className="enlace">
    {icon && <i className={icon} aria-hidden="true" />}
    {children}
    {flecha && <i className="fa-solid fa-arrow-up-right-from-square text-[0.65rem]" aria-hidden="true" />}
  </a>
)

export default EnlaceExterno
