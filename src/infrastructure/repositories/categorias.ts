import { getPoolConnection } from "./data-source";
import { ResultSetHeader, RowDataPacket } from "mysql2";



export class Categoria {
    id?: string
    nombre:string
    descripcion:string

    constructor(id:string, nombre:string, descripcion:string) {
        
        this.nombre = nombre,
        this.descripcion = descripcion  
    }

    async agregarCategoria(categoria: Categoria) {
        const connection = getPoolConnection();
        const querySql = `INSERT INTO categoria (,nombre,descripcion) values (?,?,?,?)`
        const values = [ categoria.nombre, categoria.descripcion];

        const result = await connection.query(querySql, values);
        return result;
    }

    async modificar(categoria: Categoria) {
        
        const connection = getPoolConnection();
        const querySql = `UPDATE categoria SET nombre=?, descripcion=? WHERE id=?`;
        const values =  [ categoria.nombre, categoria.descripcion];
    
        const result = await connection.query<ResultSetHeader>(querySql, values);
        return result[0];
       

    }
}