import { ProductoRepositori } from "./src/infrastructure/repositories/Producto-repositori";
import { Producto } from "./src/domain/models/Producto";

import * as readline from "readline";
import { productoController } from "./src/infrastructure/controlllers/producto.controller";
// @ts-ignore
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Es el reemplazo de leer en el pseint
const leerDatos = (mensaje: string): Promise<string> =>
  new Promise((resolve) => rl.question(mensaje, (respuesta: string) => resolve(respuesta)));


// la clase que tiene acceso a las base de datos




const main = async () => {
    const productoRepositori = new ProductoRepositori();
    const menu = `
    1. Listar Productos
    2. Agregar productos
    3. Modificar producto
    4. eliminar producto
    5. consultar producto
    0. salir 
    `;
    let _opcion = await leerDatos(menu)
    let opcion = Number(_opcion)
    const productoCtrl = new productoController
    while(opcion !== 0) {
        switch(opcion){
            case 1:
               await productoCtrl.obtener();
                break;
            case 2:
                const nombre = await leerDatos ("ingrese el nombre del producto: ")
                const descripcion = await leerDatos ("ingresela descripcion del producto: ")
                const precio_ = await leerDatos ("ingrese el precio del producto: ")
                const  precio = Number (precio_)
                const cantidad = await leerDatos ("ingrese el cantidad del producto: ")
                await productoCtrl.agregar({
                    nombre,
                    descripcion, 
                    precio,
                    cantidad_disponible: Number(cantidad)
                })
               
            case 3:
                ///modificar 
                break;
            case 4: 
            // eliminar 
            break;
            
            case 5:
            const _id = await leerDatos ("ingrese el id precio del producto a consultar: ")
             const id = + _id
             await productoCtrl.obtenerPorID(id)

            break;
            
            default:
                console.log("opcion no reconocida")
                break;
        }
        _opcion = await leerDatos(menu)
        opcion = Number(_opcion)
         
    }
    rl.close();  
}

main();

