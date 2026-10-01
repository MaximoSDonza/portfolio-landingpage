import type { NavComponent } from "../types";

// Lista en orden
export const navList: NavComponent[] = [
    { id: "inicio", label: { es: "Inicio", en: "Home" }, icon: "fa-solid fa-house" },
    { id: "perfil", label: { es: "Sobre mí", en: "About" }, icon: "fa-regular fa-user" },
    { id: "experiencia", label: { es: "Experiencia", en: "Experience" }, icon: "fa-solid fa-briefcase" },
    { id: "proyectos", label: { es: "Proyectos", en: "Projects" }, icon: "fa-regular fa-folder-open" },
    { id: "skills", label: { es: "Skills", en: "Skills" }, icon: "fa-solid fa-code" },
    { id: "educacion", label: { es: "Educación", en: "Education" }, icon: "fa-solid fa-book-bookmark" },
    { id: "contacto", label: { es: "Contacto", en: "Contact" }, icon: "fa-regular fa-envelope" },
]
