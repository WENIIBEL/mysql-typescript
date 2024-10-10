// Librería de conexión a la base de datos
// Libraría externa: https://sidorares.github.io/node-mysql2/docs/documentation/typescript-examples
import mysql from "mysql2/promise";

// Configuración de la conexión a la base de datos
import config from "../../../config/default";

/**
 * Crear una conexión a la base de datos
 * @returns Conexión a la base de datos
 */
export const getPoolConnection =  () => {
  const connection = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
  });
  return connection;
};