//crea la conexión con la BD

import mysql from "mysql2/promise";
import  config from "../../../config/default";

export const getPoolConnection = async () => {
    const connetion = mysql.createPool({
        host: config.host,
        user: config.user,
        password : config.password,
        database : config.database,
        port: config.port,
    });
    return connetion;
};