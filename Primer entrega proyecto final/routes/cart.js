import { Router } from "express";

const router = Router();

const cart = [];


router.get('/:id/products', (req, res) => {

    res.json({cart})
});


router.post('/', (req, res) => {

    const newCartId = cart[cart.length - 1].id + 1;

    const newCart = {
        id: newCartId,
        timeStamp: Date.now(),
        products: { id, timeStamp: Date.now(), title, description, code, thumbnail, price, stock },
    };

    const response = {
        status: "Created",
        data: id,
    };

    cart.push(newCart);

    res.status(201).json(response);
});

router.post('/:id/products', (req, res) => {

    const { id } = req.params;
    const productIndex = product.find ((product) => product.id === Number(id)); 
    const productToAdd = product[productIndex];

    if (!productToAdd) {

        return res.status(404).json({ status: "Not Found", data: null })
    }

    const response = {
        status: "Product added to Cart",
        data: id,
    };

    cart.push(productIndex);

    res.status(201).json(response);
});


router.delete('/:id/products/id_prod', (req, res) => {

    const { id, id_prod } = req.params;
    const cartIndex = cart.find ((cart) => cart.id === Number(id));
    const productIndexToUpdate = product.find ((product) => product.id === Number(id_prod)); 
    const cartID = cart[cartIndex];
    const productToDelete = product[productIndexToUpdate];

    if (!cartID || !productToDelete) {

        return res.status(404).json({ status: "Not Found", data: null })
    }

    cart.splice(productIndexToUpdate, 1)

    res.status(200).json({

        status: "Product deleted from Cart", 
        data: productToDelete
    });

});

router.delete('/:id', (req, res) => {

    const { id } = req.params;
    const cartIndexToUpdate = cart.find ((cart) => cart.id === Number(id)); 
    const cartToDelete = cart[cartIndexToUpdate]

    if (!cartToDelete) {

        return res.status(404).json({ status: "Not Found", data: null })
    }

    cart.splice(cartIndexToUpdate, 1)

    res.status(200).json({

        status: "Cart deleted", 
        data: cartToDelete
    });
});



export default router;