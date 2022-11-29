import { Router } from "express";

const router = Router();

const products = [];

router.get('/', (req, res) => {

    res.render("productForm");
})

router.post('/products', (req, res) => {

    const { name, price, thumbnail } = req.body;

    products.push({ name, price, thumbnail });

    res.redirect("/");
})

router.get('/products', (req, res) => {

    res.render("products", { products });
})


export default router;