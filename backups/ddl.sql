-- definición de la base de datos,este codigo me permite crea las tablas en BD 
-- recordar que DDL es el lenguaje de definición de datos 

-- tienda_virtual.categorias definition

CREATE TABLE `categorias` (
  `id` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) 


-- tienda_virtual.clientes definition

CREATE TABLE `clientes` (
  `dni` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `clave` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `correo` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`dni`)
)


-- tienda_virtual.productos definition

CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `precio` int NOT NULL,
  `cantidad_disponible` int NOT NULL,
  PRIMARY KEY (`id`)
) 


-- tienda_virtual.categoriasproductos definition

CREATE TABLE `categoriasproductos` (
  `producto_id` int NOT NULL,
  `categoria_id` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`producto_id`,`categoria_id`),
  KEY `categorias_FK` (`categoria_id`),
  CONSTRAINT `categorias_FK` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `categoriasproductos_productos_fk` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) 


-- tienda_virtual.direcciones definition

CREATE TABLE `direcciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomenclatura` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `notas` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cliente_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `direcciones_clientes_FK` (`cliente_id`),
  CONSTRAINT `direcciones_clientes_FK` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`dni`)
) 


-- tienda_virtual.pedidos definition

CREATE TABLE `pedidos` (
  `id` int NOT NULL,
  `fecha` datetime NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `descuento` smallint DEFAULT NULL,
  `medio_pago` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `pedido_id` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cliente_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pedidos_clientes_FK` (`cliente_id`),
  CONSTRAINT `pedidos_clientes_FK` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`dni`)
) 


-- tienda_virtual.itms definition

CREATE TABLE `itms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `producto_id` int NOT NULL,
  `cantida` int NOT NULL,
  `pedido_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `itms_pedidos_FK` (`pedido_id`),
  KEY `itms_productos_fk` (`producto_id`),
  CONSTRAINT `itms_pedidos_FK` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `itms_productos_fk` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) 