// aqui interactuamos con la base de datos+
import { get } from "http";
import { productos } from "../../domain/models/producto";
import { getPoolConnection } from "./data-source";


export class productoRepositori {

    async agregarProducto(producto:productos) {
        
        const connetion = getPoolConnection();
        const querySql = `INSERT INTO PRODUCTOS (nombre,descripcion,precio,cantida_disponible) values (?,?,?,?)`
        const values = [producto.nombre,producto.descripcion,producto.precio,producto.cantidad_disponible];

        const result = await connetion.query(querySql, values);
        return result;

    }

} 