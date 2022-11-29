const Contenedor = require ('./contenedor.js')
const log = (p) => console.log(p)

const item1= {  

    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
    id: 1                                                                                                                                              
}           

const item2= {

    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
    id: 2
}

const item3= {

    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
    id: 3                                                                                                                                           
}

async function main() {

    const contenedor = new Contenedor('./productos.txt')

    let id1 = await contenedor.save(item1)
    log(id1)

    let id2 = await contenedor.save(item2)
    log(id2)

    let data = await contenedor.getAll()
    console.log(data)

    let search = await contenedor.getById(1)
    log(search)

    await contenedor.deleteById(1)
    let delete1 = await contenedor.getAll()
    log(delete1)

    await contenedor.deleteAll()
    let delete2 = await contenedor.getAll()
    log(delete2)
}

main()
