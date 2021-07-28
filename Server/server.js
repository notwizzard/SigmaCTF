const WebSocket = require('ws');
const fs = require('fs')

const wsServer = new WebSocket.Server({port: 9090});

wsServer.on('connection', onConnect);


const mysql = require("mysql2"); 


let Score = {
    action: 'UPDATESCORE',
    'wizzard': {
        'TOTAL': 0,
        'RECON': 200,
        'CRYPTO': 500,
        'STEGO': 350,
        'WEB': 740,
        'PPC': 560,
        'MISC': 800
    },
    'helix': {
        'TOTAL': 0,
        'RECON': 600,
        'CRYPTO': 105,
        'STEGO': 130,
        'WEB': 240,
        'PPC': 475,
        'MISC': 369
    },
    'krukrukruzhka': {
        'TOTAL': 0,
        'RECON': 499,
        'CRYPTO': 257,
        'STEGO': 113,
        'WEB': 103,
        'PPC': 500,
        'MISC': 317
    },
    'slipneff': {
        'TOTAL': 0,
        'RECON': 440,
        'CRYPTO': 111,
        'STEGO': 222,
        'WEB': 333,
        'PPC': 444,
        'MISC': 447
    },
    'igor': {
        'TOTAL': 0,
        'RECON': 327,
        'CRYPTO': 400,
        'STEGO': 350,
        'WEB': 215,
        'PPC': 109,
        'MISC': 116
    },
    'oleg': {
        'TOTAL': 0,
        'RECON': 287,
        'CRYPTO': 348,
        'STEGO': 315,
        'WEB': 240,
        'PPC': 199,
        'MISC': 100
    },
}

let Info = {
    'administrator': {
        'RECON': '0000',
        'CRYPTO': '1001',
        'STEGO': '1110',
        'WEB': '1111',
        'PPC': '1110',
        'MISC': '0001',  
    },
    'administsdfgrator': {
        'RECON': '0000',
        'CRYPTO': '1001',
        'STEGO': '0110',
        'WEB': '1111',
        'PPC': '1110',
        'MISC': '0001',  
    }
}

let Categories = {
    action: 'UPDATECATEGORIES',
    'RECON': 1,
    'CRYPTO': 1,
    'STEGO': 1,
    'WEB': 0,
    'PPC': 0,
    'MISC': 1,   
    
}



let users = [
    {
        login: 'admin',
        password: 'admin',
        key: 'administrator'
    }, 
    {
        login: 'sdfgh',
        password: 'addfgmin',
        key: 'administsdfgrator'
    }, 
    {
        login: 'sdfgfgh',
        password: 'sdf',  
        key: 'sdfgdfh'
    }, 
]

function getTime() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var hour = today.getHours()
    var minute = String(today.getMinutes()).padStart(2, '0');

    var time = hour + ':' + minute + ' ' + dd + '/' + mm + '/' + yyyy;
    return time
}


function dbGetAllInfo() {
    const connection = mysql.createConnection({
        host: "wizzard1.beget.tech",
        user: "wizzard1_sigma",
        database: "wizzard1_sigma",
        password: "C020903c!"
    });

    let compl = 0;

    connection.execute("SELECT * FROM users",
    function(err, results, fields) {
        if (err) {
            fs.appendFile('logs.txt', ('\n\n[ошибка с бд] при обновлении - ' + err + '\n' + getTime()), function(){})
        }
        if (err == null) {
            users = [];

            for (let i = 0; i < results.length; i++) {
                var q = {
                    login: results[i].login,
                    password: results[i].password,
                    key: results[i].k
                }
                users.push(q);
            }
        }
        compl++;
        if (compl == 4) {
            connection.close();
            compl = 0;
        }
    });

    connection.execute("SELECT * FROM info",
    function(err, results, fields) {
        if (err) {
            fs.appendFile('logs.txt', ('\n\n[ошибка с бд] при обновлении - ' + err + '\n' + getTime()), function(){})
        }
        if (err == null) {
            Info = {};
            
            for (let i = 0; i < results.length; i++) {
                Info[results[i].k] = {
                    'RECON': results[i].recon,
                    'CRYPTO': results[i].crypto,
                    'STEGO': results[i].stego,
                    'WEB': results[i].web,
                    'PPC': results[i].ppc,
                    'MISC': results[i].misc
                }
            }
        }
        compl++;
        if (compl == 4) {
            connection.close();
            compl = 0;
        }
    });

    connection.execute("SELECT * FROM categories",
    function(err, results, fields) {
        if (err) {
            fs.appendFile('logs.txt', ('\n\n[ошибка с бд] при обновлении - ' + err + '\n' + getTime()), function(){})
        }
        if (err == null) {
            Categories = {
                action: 'UPDATECATEGORIES',
                'RECON': results[0].recon,
                'CRYPTO': results[0].crypto,
                'STEGO': results[0].stego,
                'WEB': results[0].web,
                'PPC': results[0].ppc,
                'MISC': results[0].misc
            }
        }
        compl++;
        if (compl == 4) {
            connection.close();
            compl = 0;
        }
    });

    connection.execute("SELECT * FROM info",
    function(err, results, fields) {
        if (err) {
            fs.appendFile('logs.txt', ('\n\n[ошибка с бд] при обновлении - ' + err + '\n' + getTime()), function(){})
        }
        if (err == null) {
            Score = {
                action: 'UPDATESCORE'
            }
            
            for (let i = 0; i < results.length; i++) {
                Score[results[i].nick] = {
                    'TOTAL': 0,
                    'RECON': results[i].reconsum,
                    'CRYPTO': results[i].cryptosum,
                    'STEGO': results[i].stegosum,
                    'WEB': results[i].websum,
                    'PPC': results[i].ppcsum,
                    'MISC': results[i].miscsum
                }
            }
        }
        compl++;
        if (compl == 4) {
            connection.close();
            compl = 0;
        }
    });
    
}

dbGetAllInfo();


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Generate() {
    var s = '';
    let allSymbols = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for (let i = 0; i < 20; i++) {
        s = s + allSymbols[getRandomInt(allSymbols.length)];
    }
    return s
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Registration (login, password, mail, wsC) {
    const connection = mysql.createConnection({
        host: "wizzard1.beget.tech",
        user: "wizzard1_sigma",
        database: "wizzard1_sigma",
        password: "C020903c!"
    });

    let k = Generate();
    var unic = true;

    function insert() {
        var b = {
            action: 'REG',
        }
        wsC.send(JSON.stringify(b))
        fs.appendFile('logs.txt', ('\n\n[registration] ' + login +  + '\n[time] ' + getTime()), function(){})
        let sql = "INSERT INTO `info`(`k`, `nick`, `recon`, `reconsum`, `crypto`, `cryptosum`, `stego`, `stegosum`, `web`, `websum`, `ppc`, `ppcsum`, `misc`, `miscsum`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        let arr = [
            k,
            login,
            '0000000000000000000000000',
            0,
            '0000000000000000000000000',
            0,
            '0000000000000000000000000',
            0,
            '0000000000000000000000000',
            0,
            '0000000000000000000000000',
            0,
            '0000000000000000000000000',
            0
        ];
        
        connection.query(sql, arr);

        sql = "INSERT INTO `users`(`login`, `password`, `k`, `mail`) VALUES (?, ?, ?, ?)";
        arr = [
            login,
            password,
            k,
            mail
        ]
        connection.query(sql, arr)
        
        dbGetAllInfo();
    }

    connection.execute("SELECT * FROM users",
    function(err, results, fields) {
        if (err == null) {
            for (let i = 0; i < results.length; i++) {
                if (login == results[i].login) {
                    unic = false;
                }
            }
        }
    }); 

    await sleep(1500);
    if(!unic) {
        var b = {
            action: 'REGERRORLOGIN',
        }
        wsC.send(JSON.stringify(b))
    }
    else {
        insert();
    }
    await sleep(1500);
    connection.close();
    
}



function Auth (login, password) {   
    dbGetAllInfo();

    for (let i = 0; i < users.length; i++)  {
        if (users[i].login === login && users[i].password === password) return users[i].key;
    }
    return null;
}

function GetInfo(key, ws) {
    dbGetAllInfo();
    let userInfo = {
        action: 'UPDATETASKS',
    }

    userInfo['INFO'] = Info[key];

    ws.send(JSON.stringify(userInfo)); // отправили информацию о решенных тасках
    ws.send(JSON.stringify(Score)); // отправили скорборд
    ws.send(JSON.stringify(Categories)); // отправили информацию о доступности разделов
}

function CheckUser (key) {
    dbGetAllInfo();
    let logined = false;

    for (let i = 0; i < users.length; i++) {
        if (key === users[i].key) logined = true;
    }

    return logined


}

async function CheckFlag (userFlag, k, sender) {

    const connection = mysql.createConnection({
        host: "wizzard1.beget.tech",
        user: "wizzard1_sigma",
        database: "wizzard1_sigma",
        password: "C020903c!"
    });

    var goodFlag = false;
    var sended = false;
    var cost = 0;
    var number;
    var cat;


    let name = ''
    for (var i = 0; i < users.length; i++) {
        if (users[i].key == k) name = users[i].login
    }


    connection.execute("SELECT * FROM tasks", 
    function (err, result) {
        for (let i = 0; i < result.length; i++) {
            if (result[i].flag === userFlag) {
                goodFlag = true;
                cost = result[i].cost;
                cat = result[i].type;
                number = result[i].number;
                break;
            }
        }
    });

    await sleep(800);

    function send(res) {
        let flagCallback = {
            action: 'FLAG',
            result: res
        }
        if (!sended) sender.send(JSON.stringify(flagCallback));
        sended = true;
    }

    if (!goodFlag) {
        send('wrong');
        await fs.appendFile('logs.txt', ('\n\n[no flag] ' + name + ' пытался сдать флаг '+ userFlag + '\n' + getTime()), function(){})
        connection.close()
        return
    }

    var oldTasks, oldSum;
    var sql = "SELECT " + cat + " FROM info WHERE `k` = '" + k + "'";
    connection.execute(sql, 
    function (err, result) {
        oldTasks = result[0][cat];
    });

    var sql = "SELECT " + cat + "sum FROM info WHERE `k` = '" + k + "'";
    connection.execute(sql, 
    function (err, result) {
        var aska = cat + 'sum'
        oldSum = result[0][aska];
    });

    await sleep(800);

    if (oldTasks[number] == '1') {
        send('old');
        await fs.appendFile('logs.txt', ('\n\n[sec flag] ' + name + ' повторно отправил флаг '+ userFlag + '\n' + getTime()), function(){})
    }
    else {
        send('ok');
        await fs.appendFile('logs.txt', ('\n\n[flag] ' + name + ' сдал флаг '+ userFlag + '\n' + getTime()), function(){})
        var newSum = oldSum + cost;
        var newTasks = '';
        for (let i = 0; i < oldTasks.length; i++) {
            if (i === number) newTasks += '1';
            else newTasks += oldTasks[i];
        }


        var sql1 = "UPDATE `info` SET `" + cat + "`='" + newTasks +"', `" + cat + "sum`=" + newSum + " WHERE `k` = '" + k + "'";
        connection.query(sql1);
    }

    await sleep(500);

    connection.close();

}






function onConnect(wsClient) {
    //fs.appendFile('logs.txt', ('\n\n[come] кто-то пришёл ' + '\n' + getTime()), function(){})


    wsClient.on('message', function(message) {
        message = JSON.parse(message);
        if (message.action === 'AUTH') {
            let back = Auth(message.login, message.password)
            if (back !== null) {
                let backJSON = {
                    action: 'AUTH',
                    key: back
                } 
                wsClient.send(JSON.stringify(backJSON));
                fs.appendFile('logs.txt', ('\n\n[auth] ' + message.login + ' авторизовался\n' + getTime()), function(){})
            }
            else {
                let backJSON = {
                    action: 'AUTHERROR',
                    error: 'WRONG'
                }
              wsClient.send(JSON.stringify(backJSON))
            }
        }
        else if (message.action === 'REGISTRATION') {
            Registration(message.login, message.password, message.mail, wsClient); 
        }
        
        else if (CheckUser(message.key)) {
            if (message.action === 'GETINFO') {
                GetInfo(message.key, wsClient);
            }
            if (message.action === 'FLAG') {
                CheckFlag(message.flag, message.key, wsClient);
            }
        }
        else {
            let back = {
                action: 'DEAUTH'
            } 
            wsClient.send(JSON.stringify(back));
        }
        

    });

    wsClient.on('close', function() {
        //fs.appendFile('logs.txt', ('\n\n[go away] кто-то ушёл ' + '\n' + getTime()), function(){})
    });
}