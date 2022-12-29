// use ecommerce

db.createCollection('products')
db.createCollection('messages')

db.products.insertMany([{id:1, title:"goma", price:150, thumbnail:"https://ofishop.com/2741-large_default/goma-de-borrar-dos-banderas-214-lapiz-tinta-unidad-.jpg"},{id:2, title:"lapiz", price:500, thumbnail:"https://www.faber-castell.com.ar/-/media/Products/Product-Repository/CASTELL-9000/24-24-01-Pencil/119014-Graphite-pencil-CASTELL-9000-4H/Images/119014_0_PM99.ashx?bc=ffffff&as=0&h=900&w=900&sc_lang=es-AR"},{id:3, title:"regla", price:380, thumbnail:"https://www.shutterstock.com/image-vector/school-measuring-plastic-ruler-20-260nw-615662024.jpg"},{id:4, title:"escuadra", price:900, thumbnail:"https://http2.mlstatic.com/D_NQ_NP_792067-MLA46366911976_062021-W.jpg"},{id:5, title:"cartuchera", price:2200, thumbnail:"https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/cartuchera-hang-loose-negra-208040shader00e-1.jpg"},{id:6, title:"lapicera", price:1800, thumbnail:"https://argentinapilotshop.com.ar/1762-large_default/lapicera-boeing.jpg"},{id:7, title:"compas", price:3000, thumbnail:"https://www.pronor.com.ar/images/CL-355091588681883191.jpg"},{id:8, title:"sacapunta", price:2000, thumbnail:"https://www.libreriasdolfi.com.ar/media/catalog/product/cache/5be8613c49569c873a50ed7e321cb477/0/1/010176000000038_10176000000038_2021-09-30_12_00_39.jpg"},{id:9, title:"resaltador", price:3500, thumbnail:"https://www.librerialarubrica.com/wp-content/uploads/2020/03/resaltador-faber-castell-46-48-amarillo-maain.jpg"},{id:10, title:"transportador", price:4200, thumbnail:"https://skribeargentina.com/wp-content/uploads/2018/07/Transportador.jpg"}]);
db.messages.insertMany([{id:1, username:"Fernando", message:"Hola", time:"28/12/22 19:09:18"},{id:2, username:"Juan", message:"Qué tal?", time:"28/12/22 19:11:03"},{id:3, username:"Martín", message:"Buenos días", time:"28/12/22 19:12:01"},{id:4, username:"Martina", message:"Cómo están?", time:"28/12/22 19:12:22"},{id:5, username:"Agustín", message:"Muy bien!", time:"28/12/22 19:14:31"},{id:6, username:"Pamela", message:"Saludos", time:"28/12/22 19:15:58"},{id:7, username:"Matías", message:"Hasta la próxima", time:"28/12/22 19:18:09"},{id:8, username:"Juana", message:"Nos vemos!", time:"28/12/22 19:20:05"},{id:9, username:"Pablo", message:"Hasta luego", time:"28/12/22 19:20:18"},{id:10, username:"Sol", message:"Buena semana!", time:"28/12/22 19:21:00"}]);

db.products.find().pretty()
db.messages.find().pretty()
db.products.estimatedDocumentCount()
db.messages.estimatedDocumentCount()

db.products.insertOne({id:11, title:"tijera", price:750, thumbnail:"http://d3ugyf2ht6aenh.cloudfront.net/stores/345/671/products/d_802788-mla40870595766_022020-o-9e204202787bd123f916298348697580-640-0.jpg"});

db.products.find({ price: { $lt: 1000 }})
db.products.find({ $and: [{ price: { $gt: 1000 }}, { price: { $lt: 3000 }}]})
db.products.find({ price: { $gt: 3000 }})
db.products.find({},{ title: 1, _id: 0 }).sort({ price: -1 }).limit(1).offset(2)
db.products.updateMany({ id: { $gt: 0 }}, { $set: { stock: 100 }},{ upsert: true })
db.products.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })
db.products.deleteMany({ price: { $lt: 1000 }})


//use admin
db.createUser({user: "pepe", pwd: "asd456", roles: [{ role: "read", db: "ecommerce" }]})