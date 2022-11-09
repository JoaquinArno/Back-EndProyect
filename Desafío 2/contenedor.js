const fs = require('fs')

class Contenedor  {

    constructor(ruta){
        this.ruta = ruta
    }

    async save(obj) {

        const list = await this.getAll();

        if (list.length > 0 && list.some((el)=> el.title === obj.title)) {

            console.log('El producto ya se encuentra en el catalogo.')
            
        } 

        if(list.length == 0) {
            id = 1
        }
        else {
            id=list[list.length - 1].id + 1
        }

        const newObjectId = {...obj, id: newId}

        list.push (newObjectId)

        try {
            await fs.promises.writeFile (this.ruta, JSON.stringify(list, null, 2))
            return newId

        } catch (error) {
            throw new Error (`Error al guardar un nuevo Objeto: ${error}`)

        }
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

    async deleteById(id) {

        const list = await this.getAll();

        const newList = list.filter(item=> item.id !== id)


        try {
            await fs.promises.writeFile (this.ruta, JSON.stringify(newList, null, 2))
            return JSON.parse(data)

        } catch (error) {
            throw new Error (`No se pudo borrar la data: ${error}`)

        }
    }

    async deleteAll() {

        try {
            await fs.promises.writeFile (this.ruta, JSON.stringify([], null, 2))
            return JSON.parse(data)

        } catch (error) {
            throw new Error (`No se pudo borrar la data: ${error}`)

        }
    }



}