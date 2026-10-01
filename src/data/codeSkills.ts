import type { CategoriaSkill, CodeComponent, NivelSkill, SeccionInfo, Texto } from "../types";

export const skillsSeccion: SeccionInfo = {
    titulo: { es: "Skills", en: "Skills" },
    descripcion: {
        es: "Mis tecnologías de uso cotidiano y las que busco profundizar.",
        en: "The technologies I use day to day and the ones I keep learning.",
    },
}

export const categoriasSkills: { id: CategoriaSkill; titulo: Texto }[] = [
    { id: "frontend", titulo: { es: "Frontend", en: "Frontend" } },
    { id: "backend", titulo: { es: "Backend y datos", en: "Backend & data" } },
    { id: "devops", titulo: { es: "DevOps y herramientas", en: "DevOps & tools" } },
]

export const nivelesSkill: Record<NivelSkill, Texto> = {
    1: { es: "Básico", en: "Basic" },
    2: { es: "Intermedio", en: "Intermediate" },
    3: { es: "Avanzado", en: "Advanced" },
}

export const codeList: CodeComponent[] = [
    { nombre: "React", skillLvl: 2, icon: "fa-brands fa-react", categoria: "frontend" },
    { nombre: "JavaScript", skillLvl: 2, icon: "fa-brands fa-js", categoria: "frontend" },
    { nombre: "TypeScript", skillLvl: 2, icon: "fa-solid fa-code", categoria: "frontend" },
    { nombre: "Tailwind CSS", skillLvl: 2, icon: "fa-solid fa-wind", categoria: "frontend" },
    { nombre: "Node.js", skillLvl: 1, icon: "fa-brands fa-node-js", categoria: "backend" },
    { nombre: "Java", skillLvl: 1, icon: "fa-brands fa-java", categoria: "backend" },
    { nombre: "PHP", skillLvl: 2, icon: "fa-brands fa-php", categoria: "backend" },
    { nombre: "PostgreSQL", skillLvl: 1, icon: "fa-solid fa-database", categoria: "backend" },
    { nombre: "Docker", skillLvl: 2, icon: "fa-brands fa-docker", categoria: "devops" },
    { nombre: "GitHub", skillLvl: 2, icon: "fa-brands fa-github", categoria: "devops" },
    { nombre: "Jenkins", skillLvl: 1, icon: "fa-brands fa-jenkins", categoria: "devops" },
]
