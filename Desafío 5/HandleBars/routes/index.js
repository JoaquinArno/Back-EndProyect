import { Router } from "express";

const router = Router();

const products = [];

router.get('/', (req, res) => {

    res.render("productForm.hbs");
})

router.post('/products', (req, res) => {

    const { name, price, thumbnail } = req.body;

    products.push({ name, price, thumbnail });

    res.redirect("/");
})

router.get('/', (req, res) => {

    res.render("products.hbs", products);
})


export default router;