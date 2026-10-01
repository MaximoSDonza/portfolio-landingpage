import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { idiomaPorDefecto, idiomas, meta } from '../data/uiData'
import type { Idioma } from '../types'
import { IdiomaContext, type ContextoIdioma } from './idiomaContext'

const CLAVE_STORAGE = 'idioma'

const esIdioma = (valor: string | null): valor is Idioma => idiomas.some(({ id }) => id === valor)

// El idioma elegido se recuerda en el navegador del visitante.
const leerIdiomaGuardado = (): Idioma => {
  try {
    const guardado = localStorage.getItem(CLAVE_STORAGE)
    if (esIdioma(guardado)) return guardado
  } catch {
    // Storage bloqueado (modo privado, permisos): se usa el idioma por defecto
  }
  return idiomaPorDefecto
}

const IdiomaProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdiomaActual] = useState<Idioma>(leerIdiomaGuardado)

  const setIdioma = useCallback((nuevo: Idioma) => {
    setIdiomaActual(nuevo)
    try {
      localStorage.setItem(CLAVE_STORAGE, nuevo)
    } catch {
      // Sin storage el cambio vale solo para esta visita
    }
  }, [])

  // Idioma del documento (lectores de pantalla, traductores, buscadores), título y descripción
  useEffect(() => {
    document.documentElement.lang = idioma
    document.title = meta.titulo[idioma]
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.descripcion[idioma])
  }, [idioma])

  const valor = useMemo<ContextoIdioma>(
    () => ({ idioma, setIdioma, t: (traducido) => traducido[idioma] }),
    [idioma, setIdioma],
  )

  return <IdiomaContext value={valor}>{children}</IdiomaContext>
}

export default IdiomaProvider
