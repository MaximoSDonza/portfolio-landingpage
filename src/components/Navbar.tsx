import { iniciales, personal } from '../data/personalData'
import { textosUi } from '../data/uiData'
import { useActiveSection } from '../hooks/useActiveSection'
import { useIdioma } from '../hooks/useIdioma'
import { seccionesVisibles } from '../utils/secciones'
import ProgresoScroll from './ui/ProgresoScroll'
import SelectorIdioma from './ui/SelectorIdioma'

const ids = seccionesVisibles.map(({ id }) => id)

// Escritorio: barra lateral fija. Mobile: barra inferior.
const Navbar = () => {
  const { t } = useIdioma()
  const activa = useActiveSection(ids)

  return (
    <header className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-1 border-t border-neutral-800 bg-neutral-900 px-2 pb-[env(safe-area-inset-bottom)] md:inset-y-0 md:right-auto md:block md:w-20 md:border-t-0 md:border-r md:px-0 md:pb-0">
      <ProgresoScroll />

      <a
        href={`#${ids[0]}`}
        aria-label={`${personal.nombre} ${personal.apellido}, ${t(textosUi.irAlInicio)}`}
        className="absolute top-8 left-1/2 hidden -translate-x-1/2 text-sm font-semibold tracking-tight font-stretch-expanded md:block"
      >
        {iniciales}
      </a>

      <nav aria-label={t(textosUi.navegacion)} className="flex-1 md:h-full">
        <ul className="flex h-16 items-center justify-around md:h-full md:flex-col md:justify-center md:gap-2">
          {seccionesVisibles.map(({ id, label, icon }) => {
            const esActiva = activa === id

            return (
              <li key={id} className="group relative">
                <a
                  href={`#${id}`}
                  aria-label={t(label)}
                  aria-current={esActiva ? 'true' : undefined}
                  className={`flex size-9 items-center justify-center rounded-xl transition-colors duration-300 min-[360px]:size-10 md:size-11 ${
                    esActiva ? 'bg-neutral-200 text-neutral-900' : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                  }`}
                >
                  <i className={icon} aria-hidden="true" />
                </a>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-full ml-4 hidden -translate-x-1 -translate-y-1/2 rounded-md bg-neutral-200 px-2.5 py-1 text-xs font-medium whitespace-nowrap text-neutral-900 opacity-0 transition duration-200 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100 md:block"
                >
                  {t(label)}
                </span>
              </li>
            )
          })}
        </ul>
      </nav>

      <SelectorIdioma className="md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2" />
    </header>
  )
}

export default Navbar
