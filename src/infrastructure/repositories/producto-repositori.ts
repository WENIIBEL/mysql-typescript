// aqui interactuamos con la base de datos+

import { Producto } from "../../domain/models/producto";
import { getPoolConnection } from "./data-source";


export class ProductoRepositori {

    async agregarProducto(producto:Producto) {

        const connetion = getPoolConnection();
        const querySql = `INSERT INTO PRODUCTOS (nombre,descripcion,precio,cantida_disponible) values (?,?,?,?)`
        const values = [producto.nombre,producto.descripcion,producto.precio,producto.cantidad_disponible];

        const result = await connetion.query(querySql, values);
        return result;

    }

} 