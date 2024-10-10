import { ProductoRepositori } from "./src/infrastructure/repositories/Producto-repositori";
import { Producto } from "./src/domain/models/Producto";

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

    const productos = await productoRepositori.obtenerProductos()
    console.log(productos);
}

main();