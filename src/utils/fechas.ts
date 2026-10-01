import { textosFecha } from '../data/uiData'
import type { Idioma, Periodo } from '../types'

// "2024-03" -> { anio: 2024, mes: 3 }
const parsear = (valor: string) => {
  const [anio, mes] = valor.split('-').map(Number)
  return { anio, mes }
}

export const formatearMes = (valor: string, idioma: Idioma) => {
  const { anio, mes } = parsear(valor)
  return `${textosFecha[idioma].meses[mes - 1]} ${anio}`
}

export const formatearPeriodo = ({ inicio, fin }: Periodo, idioma: Idioma) =>
  `${formatearMes(inicio, idioma)} — ${fin ? formatearMes(fin, idioma) : textosFecha[idioma].actualidad}`

export const formatearAnios = ({ inicio, fin }: Periodo, idioma: Idioma) =>
  `${parsear(inicio).anio} — ${fin ? parsear(fin).anio : textosFecha[idioma].actualidad}`

// Duración inclusiva: "Mar 2024 — Mar 2024" cuenta como 1 mes.
export const calcularDuracion = ({ inicio, fin }: Periodo, idioma: Idioma, hoy = new Date()) => {
  const desde = parsear(inicio)
  const hasta = fin ? parsear(fin) : { anio: hoy.getFullYear(), mes: hoy.getMonth() + 1 }
  const total = Math.max(1, (hasta.anio - desde.anio) * 12 + (hasta.mes - desde.mes) + 1)

  const { anio, mes, conector } = textosFecha[idioma]
  const anios = Math.floor(total / 12)
  const meses = total % 12
  return [
    anios && `${anios} ${anios === 1 ? anio[0] : anio[1]}`,
    meses && `${meses} ${meses === 1 ? mes[0] : mes[1]}`,
  ]
    .filter(Boolean)
    .join(conector)
}
