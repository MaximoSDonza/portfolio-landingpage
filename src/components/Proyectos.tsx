import { proyectosList, proyectosSeccion, textosProyectos, tiposProyecto } from '../data/proyectosData'
import { useIdioma } from '../hooks/useIdioma'
import type { SeccionProps } from '../types'
import EnlaceExterno from './ui/EnlaceExterno'
import Reveal from './ui/Reveal'
import Section from './ui/Section'
import TagList from './ui/TagList'

const Proyectos = ({ id }: SeccionProps) => {
  const { t } = useIdioma()

  return (
    <Section id={id} {...proyectosSeccion}>
      <ul className="border-t border-neutral-800">
        {proyectosList.map((proyecto) => (
          <li key={proyecto.nombre}>
            <Reveal className="group grid gap-8 border-b border-neutral-800 py-10 md:grid-cols-12 md:gap-8 md:py-16">
              <div className="md:col-span-7">
                <p className="font-mono text-xs text-neutral-400 tabular-nums">
                  {proyecto.anio} · {t(tiposProyecto[proyecto.tipo])}
                </p>
                <h3 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-none font-semibold tracking-[-0.03em] font-stretch-semi-expanded transition-transform duration-700 ease-out-expo md:group-hover:translate-x-3">
                  {proyecto.nombre}
                </h3>
                <p className="mt-6 max-w-xl text-pretty text-neutral-400">{t(proyecto.descripcion)}</p>
              </div>

              <div className="flex flex-col gap-8 md:col-span-5 md:items-end md:justify-between">
                <TagList items={proyecto.tecnologias} className="md:justify-end" />

                {(proyecto.repo || proyecto.demo) && (
                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    {proyecto.repo && (
                      <EnlaceExterno href={proyecto.repo} icon="fa-brands fa-github">
                        {t(textosProyectos.codigo)}
                      </EnlaceExterno>
                    )}
                    {proyecto.demo && (
                      <EnlaceExterno href={proyecto.demo} icon="fa-solid fa-arrow-up-right-from-square text-xs">
                        {t(textosProyectos.demo)}
                      </EnlaceExterno>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Proyectos
