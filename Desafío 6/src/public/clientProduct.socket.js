const socket = io();

const productForm = document.getElementById("productForm");
const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const thumbnailInput = document.getElementById("thumbnailInput");
const productsPool = document.getElementById("productsPool");


const sendProduct = (productInfo) => {
    socket.emit("client:product", productInfo);
};
  
const renderProduct = (productsData) => {
    const html = productsData.map((productInfo) => {
        return `<ul>
                    <li>
                        <p>Nombre: ${productInfo.nombre}</p> <br/>
                        <p>Precio: ${productInfo.precio}</p> <br/>
                        <img src=${productInfo.thumbnail} width="75">
                    </li>
                </ul>`;
    });
    console.log("Arreglo de string de productos", html);
  
    console.log("String de productos", html.join(" "));
  
    productsPool.innerHTML = html.join(" ");
};
  
  
const submitProductHandler = (event) => {
    event.preventDefault();
    const productInfo = {
      nombre: nameInput.value,
      precio: priceInput.value,
      img: thumbnailInput.value
    };
  
    sendProduct(productInfo);
  
};
  
productForm.addEventListener("submit", submitProductHandler);
  
  socket.on("server:product", renderProduct);