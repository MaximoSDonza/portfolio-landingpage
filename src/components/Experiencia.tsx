import { experienciaList, experienciaSeccion, modalidades, textosExperiencia } from '../data/experienciaData'
import { useIdioma } from '../hooks/useIdioma'
import type { SeccionProps } from '../types'
import { calcularDuracion, formatearPeriodo } from '../utils/fechas'
import EnlaceExterno from './ui/EnlaceExterno'
import Reveal from './ui/Reveal'
import Section from './ui/Section'
import TagList from './ui/TagList'

const Experiencia = ({ id }: SeccionProps) => {
  const { idioma, t } = useIdioma()

  return (
    <Section id={id} {...experienciaSeccion}>
      <ol className="border-t border-neutral-800">
        {experienciaList.map((exp) => {
          const actual = exp.periodo.fin === null

          return (
            <li key={`${exp.empresa}-${exp.periodo.inicio}`}>
              <Reveal className="grid gap-6 border-b border-neutral-800 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                <div className="md:col-span-4">
                  <p className="font-mono text-xs text-neutral-400 tabular-nums">{formatearPeriodo(exp.periodo, idioma)}</p>
                  <p className="mt-2 text-sm text-neutral-400">{calcularDuracion(exp.periodo, idioma)}</p>
                  {actual && (
                    <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1 text-xs">
                      <span className="size-1.5 rounded-full bg-neutral-200" aria-hidden="true" />
                      {t(textosExperiencia.actual)}
                    </p>
                  )}
                </div>

                <div className="md:col-span-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">{t(exp.puesto)}</h3>
                  <p className="mt-2 text-neutral-300">
                    {exp.empresaUrl ? (
                      <EnlaceExterno href={exp.empresaUrl}>{exp.empresa}</EnlaceExterno>
                    ) : (
                      exp.empresa
                    )}
                    <span className="text-neutral-400">
                      {' '}
                      · {t(modalidades[exp.modalidad])} · {exp.ubicacion}
                    </span>
                  </p>
                  <p className="mt-5 max-w-prose text-pretty text-neutral-400">{t(exp.descripcion)}</p>

                  {exp.logros.length > 0 && (
                    <ul className="mt-6 max-w-prose space-y-3">
                      {exp.logros.map((logro) => (
                        <li key={logro.es} className="flex gap-4 text-pretty text-neutral-300">
                          <span className="mt-[0.75em] h-px w-3 shrink-0 bg-neutral-500" aria-hidden="true" />
                          {t(logro)}
                        </li>
                      ))}
                    </ul>
                  )}

                  <TagList items={exp.tecnologias} className="mt-7" />
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

export default Experiencia
