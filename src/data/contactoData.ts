import type { RedSocial, SeccionInfo, Texto } from "../types";

export const contactoSeccion: SeccionInfo = {
    titulo: { es: "Contactame", en: "Contact me" },
}

export const email = "maximosebastiandonza@gmail.com"

export const asuntoEmail: Texto = {
    es: "Contacto desde tu portfolio",
    en: "Contact from your portfolio",
}

export const redesList: RedSocial[] = [
    {
        nombre: "LinkedIn",
        usuario: "in/máximo-sebastian-donza",
        url: "https://www.linkedin.com/in/máximo-sebastian-donza-875379301",
        icon: "fa-brands fa-linkedin-in",
    },
    {
        nombre: "Instagram",
        usuario: "maximodonza",
        url: "https://www.instagram.com/maximodonza/",
        icon: "fa-brands fa-instagram",
    },
    {
        nombre: "Github",
        usuario: "MaximoSDonza",
        url: "https://github.com/MaximoSDonza",
        icon: "fa-brands fa-github",
    } 
]

export const textosContacto = {
    email: { es: "Email", en: "Email" },
    enviar: { es: "Enviar email", en: "Send email" },
    copiar: { es: "Copiar", en: "Copy" },
    copiado: { es: "Copiado", en: "Copied" },
    errorCopia: { es: "No se pudo copiar", en: "Couldn't copy" },
    ubicacion: { es: "Ubicación", en: "Location" },
    zonaHoraria: { es: "Zona horaria", en: "Time zone" },
} satisfies Record<string, Texto>
