import { codeList } from '../data/codeSkills'
import { cursosList, formacionList } from '../data/educacionData'
import { experienciaList } from '../data/experienciaData'
import { generalList } from '../data/generalSkills'
import { navList } from '../data/navbarData'
import { proyectosList } from '../data/proyectosData'
import type { SeccionId } from '../types'

// Secciones cuya data está vacía: no se muestran ni en la página ni en el navbar.
// Vuelven a aparecer solas cuando cargás contenido en su archivo de data.
const vacias: Partial<Record<SeccionId, boolean>> = {
  experiencia: experienciaList.length === 0,
  proyectos: proyectosList.length === 0,
  skills: codeList.length === 0 && generalList.length === 0,
  educacion: formacionList.length === 0 && cursosList.length === 0,
}

export const seccionesVisibles = navList.filter(({ id }) => !vacias[id])

// false si el href apunta a una sección oculta (ej: "#proyectos" sin proyectos cargados)
export const esAnclaVisible = (href: string) =>
  !href.startsWith('#') || seccionesVisibles.some(({ id }) => `#${id}` === href)
