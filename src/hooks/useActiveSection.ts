import { useEffect, useState } from 'react'

// Scroll spy: devuelve el id de la última sección cuyo borde superior ya pasó la línea de referencia.
// linea: altura de esa línea como fracción de la pantalla (0.45 = apenas arriba del centro).
export function useActiveSection(ids: readonly string[], linea = 0.45) {
  const [activa, setActiva] = useState(ids[0])

  useEffect(() => {
    let frame = 0

    const calcular = () => {
      frame = 0
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      // Al tocar fondo se activa la última sección, aunque sea más baja que media pantalla
      if (scrollTop > 0 && scrollTop + clientHeight >= scrollHeight - 2) {
        setActiva(ids[ids.length - 1])
        return
      }

      let actual = ids[0]
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top
        if (top !== undefined && top <= clientHeight * linea) actual = id
      }
      setActiva(actual)
    }
    const programar = () => {
      if (!frame) frame = requestAnimationFrame(calcular)
    }

    calcular()
    window.addEventListener('scroll', programar, { passive: true })
    window.addEventListener('resize', programar)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', programar)
      window.removeEventListener('resize', programar)
    }
  }, [ids, linea])

  return activa
}
