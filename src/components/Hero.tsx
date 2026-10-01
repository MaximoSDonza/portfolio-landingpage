import { useState } from 'react'
import { accionesHero, iniciales, personal } from '../data/personalData'
import { textosUi } from '../data/uiData'
import { useIdioma } from '../hooks/useIdioma'
import { useLocalTime } from '../hooks/useLocalTime'
import type { SeccionProps, Ubicacion } from '../types'
import { rutaPublica } from '../utils/rutas'
import { esAnclaVisible } from '../utils/secciones'

// Los botones que apuntan a una sección oculta (sin contenido) no se muestran.
const acciones = accionesHero.filter(({ href }) => esAnclaVisible(href))

// Aislado para que el reloj (se actualiza cada pocos segundos) no re-renderice todo el hero.
const UbicacionActual = ({ ubicacion }: { ubicacion: Ubicacion }) => {
  const horario = useLocalTime(ubicacion.zonaHoraria)

  return (
    <p className="tabular-nums">
      {ubicacion.ciudad}, {ubicacion.codigoPais}
      {horario && (
        <>
          <span aria-hidden="true" className="mx-2 text-neutral-600">/</span>
          <time>{horario.hora}</time> {horario.utc}
        </>
      )}
    </p>
  )
}

// Sin foto (o si la ruta no existe) se muestran las iniciales en el mismo espacio.
const FotoPerfil = () => {
  const { foto, nombre, apellido } = personal
  const [error, setError] = useState(false)

  const alFallar = () => {
    setError(true)
    console.error(`No se encontró la foto "${foto}". Los archivos de /public se usan sin "/public", ej: "/me.jpeg".`)
  }

  return (
    <div className="relative aspect-[4/5] w-32 shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/50 sm:w-40 md:order-last md:w-52 lg:w-64">
      {foto && !error ? (
        <img
          src={rutaPublica(foto)}
          alt={`${nombre} ${apellido}`}
          fetchPriority="high"
          onError={alFallar}
          className="size-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center text-4xl font-semibold tracking-tight text-neutral-600 font-stretch-expanded md:text-6xl"
        >
          {iniciales}
        </span>
      )}
    </div>
  )
}

const Hero = ({ id }: SeccionProps) => {
  const { t } = useIdioma()
  const { nombre, apellido, rol, presentacion, disponibilidad, ubicacion, cv } = personal
  const tituloId = `${id}-titulo`

  return (
    <section id={id} aria-labelledby={tituloId} className="flex min-h-[calc(100svh-4rem)] flex-col md:min-h-svh">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pt-8 pb-12 md:px-12 md:pt-10 md:pb-16">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-xs text-neutral-400">
          {disponibilidad.disponible && (
            <p className="flex items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-neutral-200 opacity-50 motion-safe:animate-ping" />
                <span className="relative size-2 rounded-full bg-neutral-200" />
              </span>
              {t(disponibilidad.texto)}
            </p>
          )}
          <UbicacionActual ubicacion={ubicacion} />
        </div>

        <div className="flex flex-1 flex-col justify-end gap-10 pt-16 md:flex-row md:items-end md:justify-between md:gap-12 md:pt-24">
          <FotoPerfil />
          <div className="min-w-0">
            <p className="text-lg font-medium text-neutral-400 md:text-2xl">{t(rol)}</p>
            <h1
              id={tituloId}
              className="mt-4 text-[clamp(2.75rem,13vw,4.5rem)] leading-[0.95] font-light tracking-[-0.04em] text-balance font-stretch-expanded md:text-[clamp(3.5rem,7vw,6.5rem)]"
            >
              {nombre} {apellido}
            </h1>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-neutral-800 pt-8 md:mt-16 lg:grid-cols-12 lg:items-end">
          <p className="max-w-xl text-pretty text-neutral-400 md:text-lg lg:col-span-7">{t(presentacion)}</p>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            {acciones.map(({ texto, href, icon }, i) => (
              <a key={href} href={href} className={`boton ${i === 0 ? 'boton-primario' : 'boton-secundario'}`}>
                {t(texto)}
                {icon && <i className={`${icon} text-xs`} aria-hidden="true" />}
              </a>
            ))}
            {cv && (
              <a href={rutaPublica(t(cv))} download className="boton boton-secundario">
                {t(textosUi.cv)}
                <i className="fa-solid fa-download text-xs" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
