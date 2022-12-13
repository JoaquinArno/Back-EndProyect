import { Router } from "express";

const router = Router();

const products = [];

const admin = true;

const checkAdmin = (req, res, next) => {

    if (admin) {
        next();
    } else {
        res.json({
            error:-2,
            description:`Ruta ${req.path} método ${req.method} no autorizada.`,
        });
    }
};

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

router.post('/', checkAdmin, (req, res) => {

    const { title, desccription, code, thumbnail, price, stock } = req.body;
    const newProductId = products[products.length - 1].id + 1;

    const newProduct = {
        id: newProductId,
        timeStamp: Date.now(),
        title,
        desccription,
        code,
        thumbnail, 
        price,
        stock,
    };

    const response = {
        status: "Created",
        data: newProduct
    };

    products.push(newProduct);

    res.status(201).json(response);
})

router.put('/:id', checkAdmin, (req, res) => {

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

router.delete('/:id', checkAdmin, (req, res) => {

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

});



export default router;