// aqui interactuamos con la base de datos+


import { Producto } from "../../domain/models/Producto";
import { getPoolConnection } from "./data-source";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// es la clase encargada de gestionar los productos
/**
 agregar
 consultar
 consultar muchos productos
 eliminar producto
 actualizar producto
 */
export class ProductoRepositori {

    async agregarProducto(producto: Producto) {
        const connection = getPoolConnection();
        const querySql = `INSERT INTO PRODUCTOS (nombre,descripcion,precio,cantidad_disponible) values (?,?,?,?)`
        const values = [producto.nombre, producto.descripcion, producto.precio, producto.cantidad_disponible];

        const result = await connection.query(querySql, values);
        return result;
    }

    async obtenerProductos() {
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM Productos`;
        const result = await connection.query(querySql);
        return result;
    }

    async obtenerProducto(idProducto: number): Promise<RowDataPacket[]> {
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM productos WHERE id = ?`;
        const values = [idProducto];
        const queyResult = await connection.query<RowDataPacket[]>(querySql, values)
        return queyResult[0];
    }

    async modificarProductos(producto: Producto) {
        const connection = getPoolConnection();
        const querySql = `UPDATE productos SET nombre=?, descripcion=?, precio=?, cantidad_disponible=? WHERE id=?`;
        const values = [producto.nombre, producto.descripcion, producto.precio, producto.cantidad_disponible, producto.id]

        const result = await connection.query<ResultSetHeader>(querySql, values);
        return result[0];
    }

    async eliminarProductos(idProducto: number) {
        const connection = getPoolConnection();
        const querySql = `DELETE FROM tienda_virtual.productos WHERE id=?;`;
        const values = [idProducto]
        const result = await connection.query(querySql, values);
        return result[0];
    }

    async unSoloProductos(idProducto: number) {
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM productos WHERE id = ?`;
        const values = [idProducto]
        const result = await connection.query(querySql, values);
        return result;
    }

} 