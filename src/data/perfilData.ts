import type { DatoPerfil, SeccionInfo, Texto } from "../types";
import { personal } from "./personalData";

const { ciudad, pais } = personal.ubicacion

export const perfilSeccion: SeccionInfo = {
    titulo: { es: "Sobre mí", en: "About me" },
}

// **dobles asteriscos**  resalta.
export const bio: Texto[] = [
    {
        es: "Técnico en programación, con formación orientada al desarrollo web, backend y gestión de base de datos. Actualmente cursando la Licenciatura en Sistemas. Cuento con experiencia en desarrollo web, gestión de base de datos relacionales, realidad aumentada y varios lenguajes de programación.",
        en: "Programming specialist with training in web development, backend development, and database management. Currently pursuing a bachelor’s degree in computer science. I have experience in web development, relational database management, augmented reality, and various programming languages.",
    },
    {
        es: "Me caracterizo por un perfil proactivo y organizado, con actitud de aprendizaje constante y buenas habilidades para el trabajo en equipo y la comunicación interpersonal. Tengo interés en continuar desarrollándome en áreas vinculadas al desarrollo de software, la automatización de sistemas y la optimización de procesos.",
        en: "I am known for being proactive and organized, with a commitment to continuous learning and strong teamwork and interpersonal communication skills. I am interested in continuing to develop my skills in areas related to software development, systems automation, and process optimization.",
    },
]

export const datosPerfil: DatoPerfil[] = [
    {
        etiqueta: { es: "Ubicación", en: "Location" },
        valor: { es: `${ciudad}, ${pais.es}`, en: `${ciudad}, ${pais.en}` },
    },
    {
        etiqueta: { es: "Enfoque", en: "Focus" },
        valor: { es: "Desarrollo web full stack", en: "Full stack web development" },
    },
    {
        etiqueta: { es: "Modalidad", en: "Work mode" },
        valor: { es: "Remoto o híbrido", en: "Remote or hybrid" },
    },
    {
        etiqueta: { es: "Idiomas", en: "Languages" },
        valor: { es: "Español · Inglés ", en: "Spanish · English " },
    },
    {
        etiqueta: { es: "Intereses", en: "Interests" },
        valor: { es: "DevOps, UX, Data Consistency", en: "DevOps, UX, Data Consistency" },
    },
]
