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
    {
        nombre: "Portfolio",
        anio: 2026,
        tipo: "personal",
        descripcion: {
            es: "Sitio web personal desarrollado como una landing page interactiva y responsiva. Su objetivo es presentar mi perfil profesional, proyectos destacados, experiencia laboral, educación y habilidades.",
            en: "A personal website developed as an interactive and responsive landing page. Its purpose is to showcase my professional profile, featured projects, work experience, education, and skills.",
        },
        tecnologias: ["React", "TypeScript", "Tailwindcss"],
        repo: "https://github.com/MaximoSDonza/portfolio-landingpage",
        demo: "https://maximosdonza.github.io/portfolio-landingpage/",
    },
]
