import { createContext } from 'react'
import type { Idioma, Traducido } from '../types'

export type ContextoIdioma = {
  idioma: Idioma
  setIdioma: (idioma: Idioma) => void
  t: <T>(valor: Traducido<T>) => T
}

export const IdiomaContext = createContext<ContextoIdioma | null>(null)
