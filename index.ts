import { ProductoRepositori } from "./src/infrastructure/repositories/Producto-repositori";
import { Producto } from "./src/domain/models/Producto";
import { RowDataPacket } from "mysql2";

// la clase que tiene acceso a las base de datos
const productoRepositori = new ProductoRepositori();



const main = async () => {
    // agregamos los productos
    const producto1 = new Producto({
        nombre: "televisor LG",
        descripcion: "televisor LG 40 pulgadas",
        precio: 1000000,
        cantidad_disponible: 10,
    })
    const result = await productoRepositori.agregarProducto(producto1)
    console.log(result);
    
   
    const resultadoProducto3 = await productoRepositori.obtenerProductos(3)
    
    if (resultadoProducto3.length > 0){
        const jsonProducto3 = resultadoProducto3[0]
        const producto3 = jsonProducto3 as Producto // hacemos el casteo
        console.log(producto3);
    }
    const productos = await productoRepositori.obtenerProductos()
}

main();


//
// //console.log(result);
// //const productoUpdate = new Producto({
//     nombre: "televisor LG",
//     descripcion: "televisor LG 40 pulgadas",
//     precio: 1000000,
//     cantidad_disponible: 10,
// })
// const resultUpdate = await productoRepositori.modificarProductos(producto1)
// console.log(resultUpdate);

// //

// const itmsProducto3 : RowDataPacket[] = await productoRepositori.obtenerProductos(3)
    //  console.log(itmsProducto3);