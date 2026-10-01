import { idiomas, textosUi } from '../../data/uiData'
import { useIdioma } from '../../hooks/useIdioma'

const claseBoton =
  'items-center justify-center rounded-xl border font-mono text-[0.6875rem] font-medium transition-colors duration-300'

const SelectorIdioma = ({ className = '' }: { className?: string }) => {
  const { idioma, setIdioma, t } = useIdioma()
  const siguiente = idiomas[(idiomas.findIndex(({ id }) => id === idioma) + 1) % idiomas.length]

  return (
    <div role="group" aria-label={t(textosUi.idioma)} className={className}>
      {/* Mobile: un solo botón que pasa al siguiente idioma. Es siempre el mismo elemento, así no pierde el foco al cambiar. */}
      <button
        type="button"
        lang={siguiente.id}
        aria-label={siguiente.nombre}
        onClick={() => setIdioma(siguiente.id)}
        className={`${claseBoton} flex size-9 border-neutral-700 text-neutral-300 hover:border-neutral-200 hover:text-neutral-200 min-[360px]:size-10 md:hidden`}
      >
        {siguiente.codigo}
      </button>

      {/* Escritorio: todos los idiomas apilados, con el actual marcado */}
      <div className="hidden flex-col gap-1 md:flex">
        {idiomas.map(({ id, codigo, nombre }) => {
          const activo = id === idioma

          return (
            <button
              key={id}
              type="button"
              lang={id}
              aria-label={nombre}
              aria-pressed={activo}
              onClick={() => setIdioma(id)}
              className={`${claseBoton} flex size-9 ${
                activo
                  ? 'border-neutral-700 text-neutral-200'
                  : 'border-transparent text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
              }`}
            >
              {codigo}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SelectorIdioma
