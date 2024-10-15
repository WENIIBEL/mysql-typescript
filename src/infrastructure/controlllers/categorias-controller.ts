import { CategoriaRepository } from "../repositories/categorias-repository";
import { Categoria } from "../../domain/models/categorias";

export class CategoriaCtrl {
    private repositoryC : CategoriaRepository

    constructor() {
        this.repositoryC = new CategoriaRepository();
    }


    async agregar(pyload:{id:string, nombre:string, descripcion:string}){

        const categoria = new Categoria({
            id:pyload.id,
            nombre:pyload.nombre,
            descripcion:pyload.descripcion,
        });

       const result = await this.repositoryC.agregarCategoria(categoria)
       console.log("categoria agregada")
        
        
    }
}


