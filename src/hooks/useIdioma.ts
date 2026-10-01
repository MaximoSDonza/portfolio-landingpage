import { useContext } from 'react'
import { IdiomaContext } from '../context/idiomaContext'

// Idioma actual, función para cambiarlo y t() para leer textos { es, en } de la data.
export function useIdioma() {
  const contexto = useContext(IdiomaContext)
  if (!contexto) throw new Error('useIdioma tiene que usarse dentro de <IdiomaProvider>')
  return contexto
}
