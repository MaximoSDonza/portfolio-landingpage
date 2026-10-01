import {
  cursosList,
  cursosTitulo,
  educacionSeccion,
  estadosFormacion,
  formacionList,
  formacionTitulo,
} from '../data/educacionData'
import { useIdioma } from '../hooks/useIdioma'
import type { SeccionProps } from '../types'
import { formatearAnios } from '../utils/fechas'
import EnlaceExterno from './ui/EnlaceExterno'
import Reveal from './ui/Reveal'
import Section from './ui/Section'
import TituloColumna from './ui/TituloColumna'

const Educacion = ({ id }: SeccionProps) => {
  const { idioma, t } = useIdioma()

  return (
    <Section id={id} {...educacionSeccion}>
      <div className="grid gap-20 md:grid-cols-12 md:gap-8">
        {formacionList.length > 0 && (
          <div className="md:col-span-7">
            <TituloColumna>{t(formacionTitulo)}</TituloColumna>
            <ol>
              {formacionList.map((formacion, i) => {
                const enCurso = formacion.periodo.fin === null

                return (
                  <li key={formacion.titulo.es}>
                    <Reveal delay={i * 80} className="border-b border-neutral-800 py-8 md:py-10">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <p className="font-mono text-xs text-neutral-400 tabular-nums">
                          {formatearAnios(formacion.periodo, idioma)}
                        </p>
                        <p
                          className={`rounded-full border px-2.5 py-0.5 text-xs ${
                            enCurso ? 'border-neutral-500' : 'border-neutral-800 text-neutral-400'
                          }`}
                        >
                          {t(enCurso ? estadosFormacion.enCurso : estadosFormacion.finalizado)}
                        </p>
                      </div>
                      <h4 className="mt-4 text-xl font-semibold tracking-tight text-balance md:text-2xl">
                        {t(formacion.titulo)}
                      </h4>
                      <p className="mt-1.5 text-neutral-300">{formacion.institucion}</p>
                      {formacion.descripcion && (
                        <p className="mt-4 max-w-prose text-pretty text-neutral-400">{t(formacion.descripcion)}</p>
                      )}
                    </Reveal>
                  </li>
                )
              })}
            </ol>
          </div>
        )}

        {cursosList.length > 0 && (
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <TituloColumna>{t(cursosTitulo)}</TituloColumna>
            <ul>
              {cursosList.map((curso) => (
                <li
                  key={curso.nombre.es}
                  className="flex items-baseline justify-between gap-6 border-b border-neutral-800 py-4"
                >
                  <div>
                    {curso.url ? (
                      <EnlaceExterno href={curso.url} flecha>
                        {t(curso.nombre)}
                      </EnlaceExterno>
                    ) : (
                      <p>{t(curso.nombre)}</p>
                    )}
                    {curso.plataforma && <p className="mt-1 text-sm text-neutral-400">{curso.plataforma}</p>}
                  </div>
                  <span className="font-mono text-xs text-neutral-400 tabular-nums">{curso.anio}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </Section>
  )
}

export default Educacion
