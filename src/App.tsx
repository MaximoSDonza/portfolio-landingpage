import type { ComponentType } from 'react'
import Contacto from './components/Contacto'
import Educacion from './components/Educacion'
import Experiencia from './components/Experiencia'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Perfil from './components/Perfil'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import type { SeccionId, SeccionProps } from './types'
import { seccionesVisibles } from './utils/secciones'

// Componente de cada seccion. El orden lo define navList (src/data/navbarData.ts);
// las secciones con la data vacía se ocultan (src/utils/secciones.ts).
const secciones: Record<SeccionId, ComponentType<SeccionProps>> = {
  inicio: Hero,
  perfil: Perfil,
  experiencia: Experiencia,
  proyectos: Proyectos,
  skills: Skills,
  educacion: Educacion,
  contacto: Contacto,
}

function App() {
  return (
    <>
      <Navbar />
      <main className="md:pl-20">
        {seccionesVisibles.map(({ id }) => {
          const Seccion = secciones[id]
          return <Seccion key={id} id={id} />
        })}
      </main>
      <Footer />
    </>
  )
}

export default App
