const { promises: fs } = require('fs');

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }

    async save(object) {
        let objects = await this.getAll()

        console.log(objects);
        
        let numberId = 1
        if (objects.length > 0) {
            numberId = objects[objects.length - 1].id + 1
        }
        const newObj = { ...object, id: numberId }
        objects.push(newObj)
        try { 
            await fs.writeFile(this.archivo, JSON.stringify(objects, null, 2))
            console.log('Tarea realizada con exito')
        } catch (error) {
            console.log('error:', error);
        }
    }
    async getAll() {
        try {
            const objects = await fs.readFile(this.archivo, 'utf-8')
            return JSON.parse(objects)
        } catch (err) {
            return [];
        }
    }
    async getById(ids) {
        try{
            const items = await this.getAll()
            const getId = items.filter(item => item.id == ids)
            return getId
        }catch(err) {
            console.log(err)
        }
    }
    async deleteAll() {
        try {
            await fs.unlink(this.archivo)
            console.log('Archivo borrado');
        } catch (err) {
            console.log(err);
        }
    }
    async deleteById(id) {
        try{
            const items = await this.getAll()
            const deleteId = items.filter(item => item.id != id)
            await fs.writeFile(this.archivo, JSON.stringify(deleteId, null, 2))
        }catch(err) {
            console.log(err)
        }
    }
}

module.exports = Contenedor