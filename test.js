const Contenedor = require('./Contenedor.js')

let productos = [{ title: 'lapicera', price: 100, thumbnail: 'url' },
        { title: 'regla', price: 400, thumbnail: 'url' },
        { title: 'cartuchera', price: 2500, thumbnail: 'url' }
    ]

async function main() {

    const archivo = new Contenedor('./productos.txt')
    

    async function createProduct(product) {
        for (const prod of product) {
            await archivo.save(prod)
        }
    }
    await createProduct(productos)
    console.log(await archivo.getAll())
    console.log(await archivo.getById(5))
    //archivo.deleteAll()
    //await archivo.deleteById(2)
}

main()
