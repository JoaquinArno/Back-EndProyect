const fs = require('fs')

class Contenedor  {

    constructor(ruta){
        this.ruta = ruta
    }

    async getAll() {

        try {
            const data = await fs.promises.readFile(this.ruta, 'utf8')
            return JSON.parse(data)

        } catch (error) {
            return [];
        }
    }

    async getById(id) {

        try {
            const list = await this.getAll();
            return list.find(item=> item.id === id) ?? null

        } catch (error) {
            throw new Error (`No se encontro el dato: ${error}`)
        }
    }
}


const contenedor = new Contenedor('./productos.txt')


const express = require('express')

const app = express()

const PORT = 8081

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})


app.get('/productos', (req, res) => {

    res.sendFile(__dirname + '/productos.txt')
    
})


function generateRandom () {

    const productoRandom = parseInt(Math.random() * 3) + 1

    const productoRandomId = contenedor.getById(productoRandom)

    fs.writeFileSync('./productoRandom.txt', `${productoRandomId}`)

}

generateRandom()


app.get('/productoRandom', (req, res) => {

    res.sendFile(__dirname + '/productoRandom.txt')

})

