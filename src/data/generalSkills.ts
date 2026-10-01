import type { GeneralSkill, Texto } from "../types";

export const generalSkillsTitulo: Texto = { es: "Habilidades generales", en: "Soft skills" }

export const generalList: GeneralSkill[] = [
    { nombre: { es: "Trabajo en equipo", en: "Teamwork" }, icon: "fa-solid fa-people-group" },
    { nombre: { es: "Comunicación clara", en: "Clear communication" }, icon: "fa-regular fa-comments" },
    { nombre: { es: "Resolución de problemas", en: "Problem solving" }, icon: "fa-solid fa-puzzle-piece" },
    { nombre: { es: "Aprendizaje continuo", en: "Continuous learning" }, icon: "fa-solid fa-book-open" },
    { nombre: { es: "Metodologías ágiles", en: "Agile methodologies" }, icon: "fa-solid fa-arrows-rotate" },
    { nombre: { es: "Documentación técnica", en: "Technical writing" }, icon: "fa-regular fa-file-lines" },
    { nombre: { es: "Atención al detalle", en: "Attention to detail" }, icon: "fa-regular fa-eye" },
    { nombre: { es: "Autonomía", en: "Self-management" }, icon: "fa-regular fa-compass" },
]
