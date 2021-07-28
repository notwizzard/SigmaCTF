const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 5002});

wsServer.on('connection', onConnect);

let flag = "error_g00d_game_dumb_b4ttleship";

let x = RandomInteger(0, 1000);
let y = RandomInteger(0, 1000);

function onConnect(wsClient) {

    wsClient.on("message", function(message) {
        message = JSON.parse(message);
        let uX = message.x;
        let uY = message.y;
        let distance = Math.sqrt(Math.pow(x - uX, 2) + Math.pow(y - uY, 2));

        let result = {}

        if (distance == 0) {
            result.result = "hit";
            result.distance = flag;
            wsClient.send(JSON.stringify(result));
        }
        else {
            result.result = "miss";
            result.distance = distance;
            wsClient.send(JSON.stringify(result));
        }

    });

}

function RandomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand); 
}

function Move() {
    x = RandomInteger(0, 1000);
    y = RandomInteger(0, 1000);
}


setInterval(Move, 2000);