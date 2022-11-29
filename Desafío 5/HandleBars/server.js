import express, { json, urlencoded } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { engine } from "express-handlebars";
import routes from "./routes/index.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(json());
app.use(urlencoded({extended: true}));
app.use("/", routes);

app.engine("hbs", engine({

    extname: ".hbs",
    defaultLayout: join(__dirname, "/views/layouts/main.hbs"),
    layoutsDir: join(__dirname, "/views/layouts")
}));



app.set("view engine", "hbs");
app.set("views", join(__dirname, "/views"));


app.listen(8080, (error) => {

    if(error) {

        console.log('Error: Server could not be initialized');
    }

    console.log('Server listening to port 8080')

});