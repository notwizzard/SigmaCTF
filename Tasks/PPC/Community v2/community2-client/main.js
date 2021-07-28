//let sock = new WebSocket("ws://localhost:5001");
//let sock = new WebSocket("ws://45.90.34.131:5001");
let sock = new WebSocket("ws://45.90.34.131:5003");

sock.onmessage = function(event) {
    let messageContext = event.data;
    document.getElementById("flag").textContent = "server message: " + messageContext;
}

function RandomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand); 
}

function UpdateToken() {
    alphabet = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM";
    let token = ""
    for(let i = 0; i < 20; i ++) {
        token += alphabet[RandomInteger(0, alphabet.length - 1)];
    }

    if (localStorage.getItem("token") == null) localStorage.setItem("token", token);
}

UpdateToken();

function Sender() {
    let clickMessage = localStorage.getItem("token");
    sock.send(clickMessage);
}

