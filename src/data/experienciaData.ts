import type { Experiencia, Modalidad, SeccionInfo, Texto } from "../types";

export const experienciaSeccion: SeccionInfo = {
    titulo: { es: "Experiencia", en: "Experience" },
}

export const modalidades: Record<Modalidad, Texto> = {
    remoto: { es: "Remoto", en: "Remote" },
    hibrido: { es: "Híbrido", en: "Hybrid" },
    presencial: { es: "Presencial", en: "On-site" },
}

export const textosExperiencia = {
    actual: { es: "Actual", en: "Current" },
} satisfies Record<string, Texto>


export const experienciaList: Experiencia[] = [
    {
        puesto: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
        empresa: "UNNOBA",
        ubicacion: "Junín, Buenos Aires",
        modalidad: "presencial",
        periodo: { inicio: "2026-09", fin: null },
        descripcion: {
            es: "Desarrollo de aplicaciones, migracion de infraestructura y mantenimiento de sistemas.",
            en: "Application development, infrastructure migration, and system maintenance.",
        },
        logros: [
            // {
            //     es: "Migré frontend de Angular a React, reduciendo errores en producción.",
            //     en: "Migrated frontend from Angular to React, reducing errors in production.",
            // },
        ],
        tecnologias: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Java"],
    },
]
