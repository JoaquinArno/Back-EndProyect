import { Router } from "express";


const router = Router();

const products = [
    {
      id: 1,
      title: "Compass",
      price: 525.75,
      thumbnail: "http://3.bp.blogspot.com/_o3i_gldCzcQ/S_jDEt2qEeI/AAAAAAAAAXI/63fENdJMsGA/s1600/old+compass.jpg",
    }
]

router.get('/', (req, res) => {

    res.json({products})
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
    const product = products.find ((product) => product.id === Number(id)); 
    const response = product ? { status: "Found", data: product } : { status: "Not Found", data: null };
    const statusCode = product ? 200 : 404;

    res.status(statusCode).json(response)
})

router.post('/', (req, res) => {

    const {title, price, thumbnail} = req.body;
    const newProductId = products[products.length - 1].id + 1;

    const newProduct = {
        id: newProductId,
        title, 
        price, 
        thumbnail
    };

    const response = {
        status: "Created",
        data: newProduct
    };

    products.push(newProduct);

    res.status(201).json(response);
})

router.put('/:id', (req, res) => {

    const { id } = req.params;
    const productIndexToUpdate = products.find ((product) => product.id === Number(id)); 

    if (!productIndexToUpdate) {

        return res.status(404).json({ status: "Not Found", data: null })
    }

    products.splice(productIndexToUpdate, 1, { id, title, price, thumbnail})

    res.status(200).json({

        status: "Updated", 
        data:{ id, title, price, thumbnail} 
    });
})

router.delete('/:id', (req, res) => {

    const { id } = req.params;
    const productIndexToUpdate = products.find ((product) => product.id === Number(id)); 
    const productToDelete = products[productIndexToUpdate]

    if (!productToDelete) {

        return res.status(404).json({ status: "Not Found", data: null })
    }

    products.splice(productIndexToUpdate, 1)

    res.status(200).json({

        status: "Deleted", 
        data: productToDelete
    });

})



export default router;