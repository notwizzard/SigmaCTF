//let sock = new WebSocket("ws://localhost:5004");
let sock = new WebSocket("ws://45.90.34.131:5004");

sock.onmessage = function(event) {
    document.getElementById("captcha").textContent = event.data;
}

function Sender() {
    let message = document.getElementById("message").value;
    sock.send(message);
}