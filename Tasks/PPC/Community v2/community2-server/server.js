const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 5003});

wsServer.on('connection', onConnect);
wsServer.on('close', Close);

let clients = [];

let timeToClick = 15;
let userNumberRequire = 150;
let flag = "error_this_r0b0t_1s_more_demanding";


//keys randomly generated on client
let users = {};

function onConnect(wsClient) {

    clients.push(wsClient);

    wsClient.on("message", function(message) {
        users[message] = {
            time: Math.floor(Date.now() / 1000),
            isActive: 1
        }
    });

}

function Close(wsClient) {
    let ind = clients.indexOf(wsClient);
    if (ind > -1) {
        clients.splice(ind, 1);
    }
}

function Counter () {
    let nowCounter = 0;
    for (token in users) {
        let nowTime = Math.floor(Date.now() / 1000);
        if (users[token].time < nowTime - timeToClick) {
            users[token].isActive = 0;
        }
        if (users[token].isActive == 1) {
            nowCounter ++;
        }
    }

    if (nowCounter >= userNumberRequire) {
        SendAll(flag);
    } 
    else if (nowCounter < 2) {
        SendAll("not enough users!");
    }
    else {
        SendAll("only " + nowCounter + "/" + userNumberRequire + " users were active in the last " + timeToClick + " seconds");
    }
}

function SendAll (m) {
    for (let i = 0; i < clients.length; i++) {
        clients[i].send(m);
    }
}

setInterval(Counter, 2000);