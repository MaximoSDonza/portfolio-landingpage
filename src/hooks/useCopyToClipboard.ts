import { useCallback, useEffect, useRef, useState } from 'react'

export type EstadoCopia = 'idle' | 'copiado' | 'error'

// Copia texto al portapapeles y expone el estado para dar feedback ("Copiado", "No se pudo copiar").
export function useCopyToClipboard(resetMs = 2000) {
  const [estado, setEstado] = useState<EstadoCopia>('idle')
  const timeout = useRef<number | undefined>(undefined)

  const copiar = useCallback(
    async (texto: string) => {
      let ok = false
      try {
        await navigator.clipboard.writeText(texto)
        ok = true
      } catch {
        ok = copiarConFallback(texto)
      }

      setEstado(ok ? 'copiado' : 'error')
      window.clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setEstado('idle'), resetMs)
      return ok
    },
    [resetMs],
  )

  useEffect(() => () => window.clearTimeout(timeout.current), [])

  return { estado, copiar }
}

// Para navegadores sin Clipboard API o contextos no seguros (http).
function copiarConFallback(texto: string) {
  const area = document.createElement('textarea')
  area.value = texto
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.opacity = '0'
  document.body.appendChild(area)
  area.select()
  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    area.remove()
  }
}
