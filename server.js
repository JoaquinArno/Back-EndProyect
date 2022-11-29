import express, { json, urlencoded } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import routes from "./routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(json());
app.use(urlencoded({extended: true}));
app.use("/", routes);

app.set("views", "./views");
app.set("view engine", "pug");


app.listen(8080, (error) => {

    if(error) {

        console.log('Error: Server could not be initialized');
    }

    console.log('Server listening to port 8080')

});