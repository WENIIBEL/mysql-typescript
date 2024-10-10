import { ProductoRepositori } from "./src/infrastructure/repositories/Producto-repositori";
import { Producto } from "./src/domain/models/Producto";

import * as readline from "readline";
// @ts-ignore
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Es el reemplazo de leer en el pseint
const leerDatos = (mensaje: string): Promise<string> =>
  new Promise((resolve) => rl.question(mensaje, (respuesta: string) => resolve(respuesta)));


// la clase que tiene acceso a las base de datos




const main = async () => {
    const productoRepositori = new ProductoRepositori();
    const menu = `
    1. listar Productos
    2. agregar productos
    0. salir
    `;






   //agregamos los productos
    const producto1 = new Producto({
        nombre: "televisor LG",
        descripcion: "televisor LG 40 pulgadas",
        precio: 1000000,
        cantidad_disponible: 10,
    })
    const result = await productoRepositori.agregarProducto(producto1)
    console.log(result);
    
   // CONSULTA DE UN SOLO PRODUCTO
    const resultadoProducto3 = await productoRepositori.obtenerProducto(3)
    if (resultadoProducto3.length > 0){
        const jsonProducto3 = resultadoProducto3[0]
        // CAPTURAMOS EL PODRUCTO
        const producto3 = jsonProducto3 as Producto // hacemos el casteo
        console.log(producto3);

        producto3.nombre = "Televisor  SAMGUM 35PUL";
        producto3.descripcion = "es de 35 pulgadas"
        const resultadoActual3 = await productoRepositori.modificarProductos(producto3)
        console.log(resultadoActual3)
    }

    // eliminar producto
    await productoRepositori.eliminarProductos(3) 

    const productos = await productoRepositori.obtenerProductos()
    console.log(productos)
    


}

main();

