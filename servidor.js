const express = require('express')
const Contenedor = require('./Contenedor.js')

const PORT = 8081

const app = express()

const archivo = new Contenedor('./productos.txt')

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
app.get('/productos',async (req, res) => { 
    let productos = await archivo.getAll()
    console.log(productos.length);
    res.json(productos)
})
app.get('/productoRandom', async (req, res) => { 
    let productosTodos = await archivo.getAll()
    let numero = Math.floor(Math.random() * productosTodos.length)
    res.json(await archivo.getById(numero))
})
