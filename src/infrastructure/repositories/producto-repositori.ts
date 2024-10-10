// aqui interactuamos con la base de datos+

import { Producto } from "../../domain/models/Producto";
import { getPoolConnection } from "./data-source";


export class ProductoRepositori {

    async agregarProducto(producto:Producto) {

        const connection = getPoolConnection();
        const querySql = `INSERT INTO PRODUCTOS (nombre,descripcion,precio,cantidad_disponible) values (?,?,?,?)`
        const values = [producto.nombre,producto.descripcion,producto.precio,producto.cantidad_disponible];

        const result =  (await connection).query(querySql, values);
        return result;

    }

} 