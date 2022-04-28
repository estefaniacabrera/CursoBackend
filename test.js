const Contenedor = require('./Contenedor.js')

let productos = [{ title: 'lapicera', price: 100, thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Falohamaxikiosco.com.ar%2Fwp-content%2Fuploads%2F2020%2F07%2Fbic.jpg&imgrefurl=https%3A%2F%2Falohamaxikiosco.com.ar%2Fproduct%2Flapicera-bic%2F&tbnid=IxJQn2AuQGRSxM&vet=12ahUKEwjJqsKMhaT3AhUhBbkGHXKhDpkQMygDegUIARDeAg..i&docid=He1Hbnmu7zXNGM&w=225&h=225&q=lapicera%20bic&ved=2ahUKEwjJqsKMhaT3AhUhBbkGHXKhDpkQMygDegUIARDeAg' },
        { title: 'regla', price: 400, thumbnail: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frfmayorista.com.ar%2Fwp-content%2Fuploads%2F2020%2F03%2FREGLA-ECONM_15-CM.-600x600.jpg&imgrefurl=https%3A%2F%2Frfmayorista.com.ar%2Fproduct%2Fregla-economica-trans-15cm-cc-ind-arg%2F&tbnid=uQYJuvVshfbBJM&vet=12ahUKEwiuqpKohaT3AhXqK7kGHeQtAz8QMygAegUIARDfAQ..i&docid=ncWNpxJZO_w4xM&w=600&h=600&q=regla&ved=2ahUKEwiuqpKohaT3AhXqK7kGHeQtAz8QMygAegUIARDfAQ' },
        { title: 'cartuchera', price: 2500, thumbnail: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fd2r9epyceweg5n.cloudfront.net%2Fstores%2F922%2F676%2Fproducts%2Fcartuchera-silicona-fucsia1-9661d8de63f4197b7715835246598347-640-0.png&imgrefurl=https%3A%2F%2Fwww.purodcordoba.com.ar%2Fproductos%2Fcartuchera-silicona%2F&tbnid=Ym4BPrcKP8vqkM&vet=12ahUKEwj10_LxhaT3AhUvMrkGHeIGDlYQMygAegUIARCuAg..i&docid=RJNvDBViYlhdpM&w=372&h=373&q=cartuchera&hl=es&ved=2ahUKEwj10_LxhaT3AhUvMrkGHeIGDlYQMygAegUIARCuAg' }
    ]

async function main() {

    const archivo = new Contenedor('./productos.txt')
    

    async function createProduct(product) {
        for (const prod of product) {
            await archivo.save(prod)
        }
    }
    //await createProduct(productos)
    console.log(await archivo.getAll())
    //archivo.getById(5)
    //archivo.deleteAll()
    //await archivo.deleteById(2)
}

main()
