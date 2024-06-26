import express from "express";
import pool from "./db.js";
import {PORT} from "./config.js";

const app = express();

app.get('/', async (req, res) =>{
    const[rows] = await pool.query("SELECT * FROM usuarios");
    res.json(rows)
})

app.get('/ping', async (req, res) =>{
    const [result] = await pool.query(`SELECT "Hello World" as RESULT`);
    res.json(result[0])
})

app.get('/create', async (req, res) =>{
    const result = await pool.query('INSERT INTO usuarios(name) VALUES ("Frank")')
    res.json(result);
})

app.listen(PORT)
console.log('Servidor corriendo en el puerto 3000')