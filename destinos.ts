export interface categoriasdestinos {
    strCategory: string
}

export interface resultadoswscategoriasdestinos {
    schemas: categoriasdestinos[]
}

export interface categoriaschemas {
    strschemas: string
    strname: string
    strcontry: string
    strlon: number
    strlat: number
}

export interface resultadoswsschemas {
    schemas: categoriaschemas
}