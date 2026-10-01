import { footerTexto, volverArribaTexto } from '../data/footerData'
import { personal } from '../data/personalData'
import { useIdioma } from '../hooks/useIdioma'
import { seccionesVisibles } from '../utils/secciones'

const anio = new Date().getFullYear()

const Footer = () => {
  const { t } = useIdioma()

  return (
    <footer className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0 md:pl-20">
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <p>
            © {anio} {personal.nombre} {personal.apellido}. {t(footerTexto)}
          </p>
          <a
            href={`#${seccionesVisibles[0].id}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-neutral-200"
          >
            {t(volverArribaTexto)}
            <i className="fa-solid fa-arrow-up text-xs" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
