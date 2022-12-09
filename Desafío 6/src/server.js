import express, { Router } from "express";
import { Server as IOServer } from "socket.io";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const router = Router();
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

app.use(express.static(__dirname + "./public"));

router.get('/', (req, res) => {

    res.sendFile(__dirname + "./public/index.html");
});

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