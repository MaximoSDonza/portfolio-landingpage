import { bio, datosPerfil, perfilSeccion } from '../data/perfilData'
import { useIdioma } from '../hooks/useIdioma'
import type { SeccionProps } from '../types'
import Reveal from './ui/Reveal'
import RichText from './ui/RichText'
import Section from './ui/Section'

const Perfil = ({ id }: SeccionProps) => {
  const { t } = useIdioma()

  return (
    <Section id={id} {...perfilSeccion}>
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="space-y-7 text-xl leading-relaxed text-pretty text-neutral-400 md:col-span-7 md:text-2xl md:leading-[1.5]">
          {bio.map((parrafo, i) => (
            <Reveal key={i} delay={i * 80}>
              <p>
                <RichText texto={t(parrafo)} />
              </p>
            </Reveal>
          ))}
        </div>

        <dl className="self-start border-t border-neutral-800 md:col-span-4 md:col-start-9">
          {datosPerfil.map(({ etiqueta, valor }) => (
            <div key={etiqueta.es} className="flex items-baseline justify-between gap-6 border-b border-neutral-800 py-4">
              <dt className="text-sm text-neutral-400">{t(etiqueta)}</dt>
              <dd className="text-right text-sm">{t(valor)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

export default Perfil
