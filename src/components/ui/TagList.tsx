import { textosUi } from '../../data/uiData'
import { useIdioma } from '../../hooks/useIdioma'

type TagListProps = {
  items: string[]
  className?: string
}

const TagList = ({ items, className = '' }: TagListProps) => {
  const { t } = useIdioma()

  return (
    <ul aria-label={t(textosUi.tecnologias)} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-neutral-700 px-3 py-1 font-mono text-[0.6875rem] leading-5 text-neutral-300"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TagList
