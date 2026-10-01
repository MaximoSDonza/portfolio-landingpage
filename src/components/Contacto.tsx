import { asuntoEmail, contactoSeccion, email, redesList, textosContacto } from '../data/contactoData'
import { personal } from '../data/personalData'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { useIdioma } from '../hooks/useIdioma'
import { useLocalTime } from '../hooks/useLocalTime'
import type { SeccionProps } from '../types'
import EnlaceExterno from './ui/EnlaceExterno'
import Reveal from './ui/Reveal'
import Section from './ui/Section'

const filaClase = 'flex items-baseline justify-between gap-6 border-b border-neutral-800 py-5'
const etiquetaClase = 'flex items-center gap-3 text-sm text-neutral-400'

// Aislado para que el reloj no re-renderice toda la sección. Sin zona horaria válida no se muestra la fila.
const FilaZonaHoraria = ({ zonaHoraria, etiqueta }: { zonaHoraria: string; etiqueta: string }) => {
  const horario = useLocalTime(zonaHoraria)
  if (!horario) return null

  return (
    <div className={filaClase}>
      <dt className={etiquetaClase}>
        <i className="fa-regular fa-clock w-4 text-center" aria-hidden="true" />
        {etiqueta}
      </dt>
      <dd className="text-right text-sm">
        <time className="font-mono tabular-nums">{horario.hora}</time>{' '}
        <span className="text-neutral-400">{horario.utc}</span>
      </dd>
    </div>
  )
}

const Contacto = ({ id }: SeccionProps) => {
  const { t } = useIdioma()
  const { estado, copiar } = useCopyToClipboard()
  const { ubicacion } = personal
  const mailto = `mailto:${email}?subject=${encodeURIComponent(t(asuntoEmail))}`

  const textoCopia = t(
    estado === 'copiado' ? textosContacto.copiado : estado === 'error' ? textosContacto.errorCopia : textosContacto.copiar,
  )

  return (
    <Section id={id} {...contactoSeccion} grande>
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7">
          <p className="text-sm text-neutral-400">{t(textosContacto.email)}</p>
          <a
            href={mailto}
            className="mt-3 inline-block text-[clamp(1.375rem,4vw,2.5rem)] font-medium tracking-tight break-all underline decoration-neutral-700 decoration-1 underline-offset-[0.3em] transition-colors duration-300 hover:decoration-neutral-200"
          >
            {email}
          </a>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={mailto} className="boton boton-primario">
              <i className="fa-regular fa-envelope" aria-hidden="true" />
              {t(textosContacto.enviar)}
            </a>
            <button type="button" onClick={() => copiar(email)} className="boton boton-secundario min-w-36">
              <i className={estado === 'copiado' ? 'fa-solid fa-check' : 'fa-regular fa-copy'} aria-hidden="true" />
              {textoCopia}
            </button>
            <span role="status" className="sr-only">
              {estado === 'idle' ? '' : textoCopia}
            </span>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-4 md:col-start-9">
          <dl className="border-t border-neutral-800">
            {redesList.map((red) => (
              <div key={red.nombre} className={filaClase}>
                <dt className={etiquetaClase}>
                  <i className={`${red.icon} w-4 text-center`} aria-hidden="true" />
                  {red.nombre}
                </dt>
                <dd className="min-w-0 text-right text-sm break-words">
                  <EnlaceExterno href={red.url} flecha>
                    {red.usuario}
                  </EnlaceExterno>
                </dd>
              </div>
            ))}
            <div className={filaClase}>
              <dt className={etiquetaClase}>
                <i className="fa-solid fa-location-dot w-4 text-center" aria-hidden="true" />
                {t(textosContacto.ubicacion)}
              </dt>
              <dd className="text-right text-sm">
                {ubicacion.ciudad}, {t(ubicacion.pais)}
              </dd>
            </div>
            <FilaZonaHoraria zonaHoraria={ubicacion.zonaHoraria} etiqueta={t(textosContacto.zonaHoraria)} />
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

export default Contacto
