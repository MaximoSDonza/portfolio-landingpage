// Tipos compartidos entre la data (src/data) y los componentes.

export type Idioma = "es" | "en";

// Un valor por idioma. Si agregás un idioma a Idioma, TypeScript marca cada traducción faltante.
export type Traducido<T> = Record<Idioma, T>;

export type Texto = Traducido<string>;

export type SeccionId =
    | "inicio"
    | "perfil"
    | "experiencia"
    | "proyectos"
    | "skills"
    | "educacion"
    | "contacto";

export type SeccionProps = {
    id: SeccionId;
};

export type NavComponent = {
    id: SeccionId;
    label: Texto;
    icon: string;
};

export type SeccionInfo = {
    titulo: Texto;
    descripcion?: Texto;
};

// Fechas en formato "YYYY-MM". fin: null = en curso / actualidad.
export type Periodo = {
    inicio: string;
    fin: string | null;
};

export type Ubicacion = {
    ciudad: string;
    pais: Texto;
    codigoPais: string;
    // Zona horaria IANA, ej: "America/Argentina/Buenos_Aires"
    zonaHoraria: string;
};

export type DatosPersonales = {
    nombre: string;
    apellido: string;
    rol: Texto;
    presentacion: Texto;
    disponibilidad: {
        disponible: boolean;
        texto: Texto;
    };
    ubicacion: Ubicacion;
    // Ruta a una imagen en /public, ej: "/foto.jpg". Sin foto se muestran las iniciales.
    foto?: string;
    // Ruta al PDF de cada idioma en /public. Si no existe, no se muestra el botón.
    cv?: Texto;
};

export type Accion = {
    texto: Texto;
    // Ancla a una sección ("#contacto") o URL externa
    href: string;
    icon?: string;
};

export type DatoPerfil = {
    etiqueta: Texto;
    valor: Texto;
};

export type Modalidad = "remoto" | "hibrido" | "presencial";

export type Experiencia = {
    puesto: Texto;
    empresa: string;
    empresaUrl?: string;
    ubicacion: string;
    modalidad: Modalidad;
    periodo: Periodo;
    descripcion: Texto;
    logros: Texto[];
    tecnologias: string[];
};

export type TipoProyecto = "personal" | "freelance" | "academico" | "laboral";

export type Proyecto = {
    nombre: string;
    anio: number;
    tipo: TipoProyecto;
    descripcion: Texto;
    tecnologias: string[];
    repo?: string;
    demo?: string;
};

export type CategoriaSkill = "frontend" | "backend" | "devops";

// 1 = básico, 2 = intermedio, 3 = avanzado
export type NivelSkill = 1 | 2 | 3;

export type CodeComponent = {
    nombre: string;
    skillLvl: NivelSkill;
    icon: string;
    categoria: CategoriaSkill;
};

export type GeneralSkill = {
    nombre: Texto;
    icon: string;
};

export type Formacion = {
    titulo: Texto;
    institucion: string;
    periodo: Periodo;
    descripcion?: Texto;
};

export type Curso = {
    nombre: Texto;
    plataforma: string;
    anio: number;
    url?: string;
};

export type RedSocial = {
    nombre: string;
    usuario: string;
    url: string;
    icon: string;
};
