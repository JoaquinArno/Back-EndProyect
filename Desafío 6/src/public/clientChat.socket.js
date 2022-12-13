const socket = io.connect();
const messageForm = document.getElementById("messageForm");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");


const sendMessage = (messageInfo) => {
  socket.emit("client:message", messageInfo);
};

const renderMessage = (messagesData) => {
  const html = messagesData.map((messageInfo) => {
    return `<div> <strong>${messageInfo.email}</strong> <em>${messageInfo.message}</em> </div>`;
  });
  console.log("Arreglo de string de mensajes", html);

  console.log("String de mensajes", html.join(" "));
};


const submitMessageHandler = (event) => {
  event.preventDefault();
  const messageInfo = {
    email: emailInput.value,
    message: messageInput.value,
};

sendMessage(messageInfo);

  messageInput.value = "";
  emailInput.readOnly = true;
};

messageForm.addEventListener("submit", submitMessageHandler);
socket.on("server:message", renderMessage);