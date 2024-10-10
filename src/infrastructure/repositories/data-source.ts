//crea la conexión con la BD

import mysql from 'mysql2/promise'; // esto es una libreria externa a la BD
import  config from "../../../config/default";

// crea la coneción a las BD
export const getPoolConnection = async () => {
    const connection = mysql.createPool({
        host: config.host,
        user: config.user,
        password : config.password,
        database : config.database,
    });
    return connection;
};