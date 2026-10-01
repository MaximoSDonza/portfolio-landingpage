import type { Curso, Formacion, SeccionInfo, Texto } from "../types";

export const educacionSeccion: SeccionInfo = {
    titulo: { es: "Educación", en: "Education" },
    descripcion: {
        es: "Formación formal y los cursos que la complementan.",
        en: "Formal education and the courses that complement it.",
    },
}

export const formacionTitulo: Texto = { es: "Formación", en: "Academic background" }

export const cursosTitulo: Texto = { es: "Cursos y certificaciones", en: "Courses & certifications" }

export const estadosFormacion = {
    enCurso: { es: "En curso", en: "In progress" },
    finalizado: { es: "Finalizado", en: "Completed" },
} satisfies Record<string, Texto>

// periodo.fin: null = en curso.
export const formacionList: Formacion[] = [
    {
        titulo: {
            es: "Licenciatura en Sistemas",
            en: "Bachelor of Science in Systems",
        },
        institucion: "Universidad Nacional del Noroeste de la Provincia de Buenos Aires",
        periodo: { inicio: "2025-03", fin: null },
        descripcion: {
            es: "Programación orientada a objetos, bases de datos, ingeniería de software y metodologías ágiles.",
            en: "Object-oriented programming, databases, software engineering and agile methodologies.",
        },
    },
    {
        titulo: {
            es: "Tecnicatura Superior en Desarrollo de Software",
            en: "Associate Degree in Programming",
        },
        institucion: "Escuela Secundaria Técnica",
        periodo: { inicio: "2018-03", fin: "2024-12" },
        descripcion: {
            es: "Primeros pasos con programación, redes y armado de equipos.",
            en: "First steps in programming, networking and computer hardware.",
        },
    },
]

// url es opcional (link al certificado).
export const cursosList: Curso[] = [
    // {
    //      nombre: { es: "En progreso", en: "In progress" },
    //      plataforma: "",
    //      anio: 2026,
    // },
    
]
