import { useEffect, useMemo, useState } from 'react'

// Hora actual en una zona horaria IANA y su offset UTC.
// Devuelve null si la zona horaria de la data no es válida, para no romper la página.
export function useLocalTime(zonaHoraria: string, intervaloMs = 10_000) {
  const [ahora, setAhora] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setAhora(new Date()), intervaloMs)
    return () => window.clearInterval(id)
  }, [intervaloMs])

  return useMemo(() => {
    try {
      const hora = new Intl.DateTimeFormat('es-AR', {
        timeZone: zonaHoraria,
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
      }).format(ahora)

      return { hora, utc: formatearOffset(offsetEnMinutos(zonaHoraria, ahora)) }
    } catch {
      console.error(`Zona horaria inválida: "${zonaHoraria}". Usá un nombre IANA, ej: "America/Argentina/Buenos_Aires".`)
      return null
    }
  }, [ahora, zonaHoraria])
}

// Diferencia entre la hora de la zona y UTC, calculada a partir de la fecha formateada en esa zona.
function offsetEnMinutos(zonaHoraria: string, fecha: Date) {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: zonaHoraria,
    hourCycle: 'h23',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).formatToParts(fecha)

  const valor = (tipo: Intl.DateTimeFormatPartTypes) => Number(partes.find((parte) => parte.type === tipo)?.value)
  const comoUtc = Date.UTC(
    valor('year'),
    valor('month') - 1,
    valor('day'),
    valor('hour') % 24,
    valor('minute'),
    valor('second'),
  )
  return Math.round((comoUtc - (fecha.getTime() - fecha.getMilliseconds())) / 60_000)
}

function formatearOffset(minutos: number) {
  if (minutos === 0) return 'UTC'
  const signo = minutos < 0 ? '−' : '+'
  const abs = Math.abs(minutos)
  const horas = Math.floor(abs / 60)
  const resto = abs % 60
  return `UTC${signo}${horas}${resto ? `:${String(resto).padStart(2, '0')}` : ''}`
}
