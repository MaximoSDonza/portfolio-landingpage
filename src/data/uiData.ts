import type { Idioma, Texto, Traducido } from "../types";

export const idiomas: { id: Idioma; codigo: string; nombre: string }[] = [
    { id: "es", codigo: "ES", nombre: "Español" },
    { id: "en", codigo: "EN", nombre: "English" },
]

// Idioma con el que abre la pagina.
export const idiomaPorDefecto: Idioma = "es"

// Titulo de la pestaña y descripcion para buscadores
export const meta = {
    titulo: { es: "Máximo Donza · Portfolio", en: "Máximo Donza · Portfolio" },
    descripcion: {
        es: "Portfolio de Máximo Donza, desarrollador full stack.",
        en: "Portfolio of Máximo Donza, full stack developer.",
    },
} satisfies Record<string, Texto>

// Textos generales de la interfaz
export const textosUi = {
    navegacion: { es: "Secciones", en: "Sections" },
    irAlInicio: { es: "ir al inicio", en: "back to top" },
    idioma: { es: "Idioma", en: "Language" },
    tecnologias: { es: "Tecnologías", en: "Technologies" },
    cv: { es: "CV", en: "Resume" },
} satisfies Record<string, Texto>

export const textosFecha: Traducido<{
    meses: string[];
    actualidad: string;
    anio: [singular: string, plural: string];
    mes: [singular: string, plural: string];
    conector: string;
}> = {
    es: {
        meses: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        actualidad: "Actualidad",
        anio: ["año", "años"],
        mes: ["mes", "meses"],
        conector: " y ",
    },
    en: {
        meses: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        actualidad: "Present",
        anio: ["year", "years"],
        mes: ["month", "months"],
        conector: ", ",
    },
}
