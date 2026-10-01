import type { Proyecto, SeccionInfo, Texto, TipoProyecto } from "../types";

export const proyectosSeccion: SeccionInfo = {
    titulo: { es: "Proyectos", en: "Projects" },
    descripcion: {
        es: "Una selección de mis desarrollos / proyectos.",
        en: "A selection of my developments / projects.",
    },
}

export const tiposProyecto: Record<TipoProyecto, Texto> = {
    personal: { es: "Personal", en: "Personal" },
    freelance: { es: "Freelance", en: "Freelance" },
    academico: { es: "Académico", en: "Academic" },
    laboral: { es: "Laboral", en: "Work" },
}

export const textosProyectos = {
    codigo: { es: "Código", en: "Code" },
    demo: { es: "Ver demo", en: "Live demo" },
} satisfies Record<string, Texto>

// Proyectos, repo y demo son opcionales.
export const proyectosList: Proyecto[] = [
    // Proyecto de ejemplo
    /*{
        nombre: "TurnoYa",
        anio: 2025,
        tipo: "personal",
        descripcion: {
            es: "Sistema de reserva de turnos para consultorios: agenda en tiempo real, recordatorios por email y panel para profesionales.",
            en: "Appointment booking system for medical offices: real-time scheduling, email reminders and a dashboard for practitioners.",
        },
        tecnologias: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        repo: "https://github.com/tu-usuario/turnoya",
        demo: "https://turnoya.example.com",
    },*/
]
