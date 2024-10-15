import { Categoria } from "../../domain/models/categorias";
import { getPoolConnection } from "../../infrastructure/repositories/data-source";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export class CategoriaRepository {
    async agregarCategoria(categoria: Categoria) {
        const connection = getPoolConnection();
        const querySql = `INSERT INTO categoria (id,nombre,descripcion) values (?,?,?)`
        const values = [ categoria.id,categoria.nombre, categoria.descripcion];
    
        const result = await connection.query(querySql, values);
        return result[0];
    }
    
    async modificarCategoria(categoria: Categoria) {
        
        const connection = getPoolConnection();
        const querySql = `UPDATE categoria SET nombre=?, descripcion=? WHERE id=?`;
        const values =  [ categoria.nombre, categoria.descripcion];
    
        const result = await connection.query<ResultSetHeader>(querySql, values);
        return result[0];
    }

    async obtenerCategoria() {
        const connection = getPoolConnection();
        const querySql = `SELECT * FROM categoria`;
        const result = await connection.query(querySql);
        return result;
    }

}

