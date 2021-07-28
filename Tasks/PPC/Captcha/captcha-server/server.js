const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 5004});

wsServer.on('connection', onConnect);
wsServer.on('close', onClose);

let users = [];

let flag = "error_u_h4ve_the_fastest_f1ngers_1n_the_w0rld";

let wordList = ['желание', 'семнадцать', 'ржавый', 'рассвет', 'печь', 'девять','добросердечный','возвращение','на','родину','один','товарный','вагон'];

let nowCatpcha = "";

function onConnect(wsClient) {
    users.push(wsClient);

    wsClient.on("message", function(message) {
        if (message == nowCatpcha) {
            onClose(wsClient);
            wsClient.send(flag);
        }
    });

}

function onClose(wsClient) {
    let ind = users.indexOf(wsClient);
    if (ind > -1) {
        users.splice(ind, 1);
    }
}

function RandomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand); 
}

function ReCaptcha() {
    nowCatpcha = "";
    for (let i = 0; i < 5; i ++) {
        nowCatpcha += wordList[RandomInteger(0, wordList.length - 1)];
        if (i < 4) nowCatpcha += " ";
    }

    for (let i = 0; i < users.length; i ++) {
        users[i].send(nowCatpcha);
    }
}


setInterval(ReCaptcha, 500);