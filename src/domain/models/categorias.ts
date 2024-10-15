



export class Categoria {
    id?: string
    nombre:string
    descripcion:string

    constructor(infoCategoria:{id:string, nombre:string, descripcion:string}) {
        this.id = infoCategoria.id
        this.nombre = infoCategoria.nombre
        this.descripcion = infoCategoria.descripcion  
    }
}