import {createPool} from "mysql2/promise";  //createPool no necesita promesas
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js"

//Conexion a la base de datos MySQL de forma local, osea en mi workbench
// const pool = createPool({
//     user: 'root',
//     password: 'bucaramanga',
//     host: 'localhost',
//     port: 3306,
//     database: 'usersdb'
// })

//Conexion a la base de datos con variables de entorno, estas son proporcionadas por el proveedor 
const pool = createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})

export default pool;