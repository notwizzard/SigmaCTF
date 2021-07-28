function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }





//let sock = new WebSocket("ws://localhost:5002");
let sock = new WebSocket("ws://45.90.34.131:5002");

sock.onmessage = function(event) {
    let messageContext = JSON.parse(event.data);
    let time = msToTime(Date.now());
    document.getElementById("result").textContent = "result: " + messageContext.result;
    document.getElementById("distance").textContent = "distance: " + messageContext.distance;
    document.getElementById("time").textContent = "fire time: " + time;

    // flag might come from server as distance
}

function Sender() {
    let fireMessage = {
        x: document.getElementById("x").value, 
        y: document.getElementById("y").value
    };
    sock.send(JSON.stringify(fireMessage));
}