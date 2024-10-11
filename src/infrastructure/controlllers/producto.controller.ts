import { ProductoRepositori } from "../repositories/Producto-repositori";
import { Producto } from "../../domain/models/Producto";

export class productoController {
    private repositori : ProductoRepositori;

    constructor() {
        this.repositori = new ProductoRepositori();
        
    }
    
    async agregar(pyload:{nombre:string, descripcion:string, precio:number, cantidad_disponible:number}){
        const producto = new Producto({
            nombre: pyload.nombre,
            descripcion: pyload.descripcion,
            precio: pyload.precio,
            cantidad_disponible: pyload.cantidad_disponible,
        })
        const result = await this.repositori.agregarProducto(producto)
        console.log("producto agregado")
    }

    async obtener () {
        const result = await this.repositori.obtenerProductos();
        console.log("Productos obtenidos");
        console.log(result[0]);
        return result;
    }

    async obtenerPorID(id:number){
        const result = await this.repositori.obtenerProducto(id)
        console.log ("productos obtenidos")
        console.log(result)
        return result;
    }

    async modificar(producto:Producto){
        const result = await this.repositori.modificarProductos(producto);
    }
}