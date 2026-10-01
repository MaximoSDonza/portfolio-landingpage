import { useEffect, useRef, useState } from 'react'

type Opciones = {
  threshold?: number
  rootMargin?: string
  // true: deja de observar después de la primera vez que entra en pantalla
  once?: boolean
}

// Indica si el elemento referenciado está visible en el viewport.
export function useInView<T extends Element>({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: Opciones = {}) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, visible] as const
}
