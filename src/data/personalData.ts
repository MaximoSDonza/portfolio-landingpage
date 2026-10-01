import type { Accion, DatosPersonales } from "../types";

// TODO: datos de ejemplo, reemplazar con los reales.
export const personal: DatosPersonales = {
    nombre: "Máximo",
    apellido: "Donza",
    rol: {
        es: "Desarrollador Full Stack",
        en: "Full Stack Developer",
    },
    presentacion: {
        es: "Técnico en Programación con experiencia en desarrollo web, backend y bases de datos relacionales. Perfil proactivo, organizado y orientado al aprendizaje continuo.",
        en: "Software Developer with experience in web development, backend development, and relational databases. Proactive, organized, and committed to continuous learning.",
    },
    disponibilidad: {
        disponible: false,
        texto: {
            es: "Disponible para nuevos proyectos",
            en: "Available for new projects",
        },
    },
    ubicacion: {
        ciudad: "Junín",
        pais: { es: "Argentina", en: "Argentina" },
        codigoPais: "AR",
        zonaHoraria: "America/Argentina/Buenos_Aires",
    },
    //  Foto en /public (formato vertical, ej: 800x1000).
    foto: "/me.jpeg",
    // cv: { es: "/cv-es.pdf", en: "/cv-en.pdf" },
}

export const iniciales = `${personal.nombre[0]}${personal.apellido[0]}`

// Botones del inicio. El primero es el botón principal.
export const accionesHero: Accion[] = [
    { texto: { es: "Contactame", en: "Get in touch" }, href: "#contacto" },
    { texto: { es: "Ver proyectos", en: "See projects" }, href: "#proyectos", icon: "fa-solid fa-arrow-down" },
]
