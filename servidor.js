const express = require('express')
const Contenedor = require('./Contenedor.js')

const PORT = 8081

const app = express()

const archivo = new Contenedor('./productos.txt')

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
app.get('/productos', (req, res) => { 
    res.send('Productos: ' + archivo.getAll().then(val => (console.log({ val }))))
})
app.get('/productoRandom', (req, res) => { 
    //res.send(Math.floor(Math.random(archivo.getAll()) * productos.lenght))
})