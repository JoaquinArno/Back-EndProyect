import express, { json, urlencoded } from "express";
import products from "../routes/products.js";
import cart from "../routes/form.js"

const app = express();

app.use(json())
app.use(urlencoded({extended: true}));
app.use("/api/products", products);
app.use("/api/cart", cart);

app.use((req, res, next) => {
    res.json({
        error:-2,
        description:`Ruta ${req.path} método ${req.method} no implementada.`,
    })
})

app.listen(8080, (error) => {

    if(error) {
        console.log('Error: Server could not be initialized');
    }

    console.log('Server listening to port 8080');
})