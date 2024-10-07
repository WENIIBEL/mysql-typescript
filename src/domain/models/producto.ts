export class productos {
    id:number;
    nombre:string;
    descripcion:string;
    precio:number;
    cantidad_disponible:number;

    // cuando tenemos varias caracteristicas es mejor pasar por parametro un json
    constructor(infoProducto:{
        id:number;
        nombre:string;
        descripcion:string;
        precio:number;
        cantidad_disponible:number;
    }) {
        this.id = infoProducto.id
        this.nombre = infoProducto.nombre
        this.descripcion = infoProducto.descripcion
        this.precio = infoProducto.precio
        this.cantidad_disponible = infoProducto.cantidad_disponible
    }
}