import type { ReactNode } from 'react'
import { useIdioma } from '../../hooks/useIdioma'
import type { SeccionId, SeccionInfo } from '../../types'

type SectionProps = SeccionInfo & {
  id: SeccionId
  // Encabezado más grande y apilado, pensado para el cierre (Contacto)
  grande?: boolean
  children: ReactNode
}

const Section = ({ id, titulo, descripcion, grande = false, children }: SectionProps) => {
  const { t } = useIdioma()
  const tituloId = `${id}-titulo`

  return (
    <section id={id} aria-labelledby={tituloId} className="border-t border-neutral-800 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {grande ? (
          <header className="mb-14 max-w-4xl md:mb-20">
            <h2
              id={tituloId}
              className="text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-balance font-stretch-expanded"
            >
              {t(titulo)}
            </h2>
            {descripcion && <p className="mt-8 max-w-xl text-lg text-pretty text-neutral-400">{t(descripcion)}</p>}
          </header>
        ) : (
          <header className="mb-14 grid gap-5 md:mb-20 md:grid-cols-12 md:items-end md:gap-8">
            <h2
              id={tituloId}
              className="text-[clamp(2.25rem,6vw,3.75rem)] leading-none font-semibold tracking-[-0.035em] font-stretch-expanded md:col-span-7"
            >
              {t(titulo)}
            </h2>
            {descripcion && (
              <p className="max-w-md text-pretty text-neutral-400 md:col-span-5 md:justify-self-end">{t(descripcion)}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
