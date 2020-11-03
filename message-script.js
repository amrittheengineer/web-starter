document.getElementById("message-input").onkeydown = (event) => {
  if (event.key === "Enter") {
    sendMessage(event.currentTarget.value);
    event.currentTarget.value = "";
  }
};

const messageBox = document.getElementById("message-box");

function sendMessage(message) {
  messageBox.innerHTML += `
    <h1 class="my-message">${message}</h1>
    `;
}
