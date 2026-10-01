import { categoriasSkills, codeList, nivelesSkill, skillsSeccion } from '../data/codeSkills'
import { generalList, generalSkillsTitulo } from '../data/generalSkills'
import { useIdioma } from '../hooks/useIdioma'
import type { NivelSkill, SeccionProps } from '../types'
import Reveal from './ui/Reveal'
import Section from './ui/Section'
import TituloColumna from './ui/TituloColumna'

const NIVELES: NivelSkill[] = [1, 2, 3]

const Nivel = ({ nivel }: { nivel: NivelSkill }) => (
  <span className="flex shrink-0 gap-1" aria-hidden="true">
    {NIVELES.map((n) => (
      <span key={n} className={`h-1 w-3.5 rounded-full ${n <= nivel ? 'bg-neutral-200' : 'bg-neutral-700'}`} />
    ))}
  </span>
)

const Skills = ({ id }: SeccionProps) => {
  const { t } = useIdioma()

  return (
    <Section id={id} {...skillsSeccion}>
      <div className="grid gap-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {categoriasSkills.map((categoria, i) => {
          const skills = codeList.filter((skill) => skill.categoria === categoria.id)
          if (skills.length === 0) return null

          return (
            <Reveal key={categoria.id} delay={i * 90}>
              <TituloColumna>{t(categoria.titulo)}</TituloColumna>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.nombre} className="flex items-center gap-4 border-b border-neutral-800 py-3.5">
                    <i className={`${skill.icon} w-7 text-center text-xl`} aria-hidden="true" />
                    <span className="flex min-w-0 flex-1 flex-col">
                      {skill.nombre}
                      <span className="text-xs text-neutral-400">{t(nivelesSkill[skill.skillLvl])}</span>
                    </span>
                    <Nivel nivel={skill.skillLvl} />
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>

      {generalList.length > 0 && (
        <Reveal className="mt-24 md:mt-32">
          <h3 className="text-2xl font-semibold tracking-tight font-stretch-expanded md:text-3xl">{t(generalSkillsTitulo)}</h3>
          <ul className="mt-8 grid border-t border-neutral-800 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
            {generalList.map((skill) => (
              <li key={skill.nombre.es} className="flex items-center gap-4 border-b border-neutral-800 py-4">
                <i className={`${skill.icon} w-5 text-center text-neutral-400`} aria-hidden="true" />
                {t(skill.nombre)}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  )
}

export default Skills
