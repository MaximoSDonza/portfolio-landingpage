import { useEffect, useState } from 'react'

// Progreso de scroll de la página, de 0 a 1.
export function useScrollProgress() {
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    let frame = 0

    const medir = () => {
      frame = 0
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const recorrido = scrollHeight - clientHeight
      setProgreso(recorrido > 0 ? Math.min(1, scrollTop / recorrido) : 0)
    }
    const programar = () => {
      if (!frame) frame = requestAnimationFrame(medir)
    }

    // El alto de la página también cambia sin scroll (cambio de idioma, carga de fuentes o imágenes)
    const observer = new ResizeObserver(programar)
    observer.observe(document.body)
    window.addEventListener('scroll', programar, { passive: true })
    window.addEventListener('resize', programar)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', programar)
      window.removeEventListener('resize', programar)
    }
  }, [])

  return progreso
}
