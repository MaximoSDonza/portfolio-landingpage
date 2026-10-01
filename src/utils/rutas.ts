// Vite agrega el prefijo de `base` (vite.config.ts) a las rutas de index.html y del CSS,
// pero no a los textos de la data. Esto convierte "/me.jpeg" en "/portfolio-landingpage/me.jpeg" en el build.
// Las URLs completas (https://...) quedan igual.
export const rutaPublica = (ruta: string) =>
  /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(ruta) ? ruta : `${import.meta.env.BASE_URL}${ruta.replace(/^\/+/, '')}`
