import express from "express";
import { Server as IOServer } from "socket.io";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

const expressServer = app.listen(8080, (error) => {
    if(error) {
        console.log('Error: Server could not be initialized');
    }
    console.log('Server listening to port 8080')
});

const io = new IOServer (expressServer);

const messages = [];
const products = [];

app.use(express.static(__dirname + "/public"));

app.engine("hbs", engine({

  extname: ".hbs",
  defaultLayout: join(__dirname, "/public/views/main.hbs"),
  layoutsDir: join(__dirname, "/public/views/layouts")
}));


app.set("view engine", "hbs");
app.set("views", join(__dirname, "/public/views"));

io.on("connection", (socket)=> {
    console.log(`New connection established, Socket ID: ${socket.id}`);
    socket.emit("server:message", messages);
    socket.emit("server:product", products);
    socket.on("client:message", (messageInfo) => {
      messages.push(messageInfo);
      io.emit("server:message", messages);
    });

    socket.on("client:product", (productInfo) => {
        messages.push(productInfo);
        io.emit("server:product", products);
      });
});