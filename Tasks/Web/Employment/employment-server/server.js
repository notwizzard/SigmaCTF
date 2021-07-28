const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 5005});

wsServer.on('connection', onConnect);

let flag = "error_congratulations_u_4re_4ccepted";

let types = [
    'name',
    'age',
    'ts',
    'kids',
    'kidsage',
    'pet',
    'salary',
    'mark'
];



function onConnect(wsClient) {

    wsClient.on("message", function(message) {
        let answer;
        try {
            answer = JSON.parse(message);
        }
        catch(e) {
            return
        }

        let check = [];
        for (let i = 0; i < types.length; i ++) {
            try {
                check.push(answer[types[i]]);
            }
            catch(e) {
                return
            }
        }

        let result = {
            'name': '',
            'age': '',
            'ts': '',
            'kids': '',
            'kidsage': '',
            'pet': '',
            'salary': '',
            'mark': '',
            'state': ''
        };

        // в имени должна быть цифра
        if (!nameCheck(answer['name'])) {
            result['name'] = 'Это имя уже занято, попробуйте другое';
        }
        if (answer['name'] != answer['name'] || answer['name'] == '') {
            result['name'] = 'Это поле не может быть пустым';
        }

        // необходимый возраст - 33
        try {
            answer['age'] = parseInt(answer['age']);
        }
        catch(e) {
            result['age'] = 'Укажите ваш реальный возраст';
        }

        if (answer['age'] !== 33) {
            if (answer['age'] < 33) {
                result['age'] = 'Вы слишком молоды';
            }
            else if (answer['age'] > 33) {
                result['age'] = 'Мы ищем сотрудника моложе';
            }
            else {
                result['age'] = 'Укажите ваш реальный возраст';
            }
        }
        if (answer['age'] != answer['age'] || answer['age'] == '') {
            result['age'] = 'Это поле не может быть пустым';
        }

        // необходимый ответ - 0.0
        if (answer['ts'] != 0) {
            result['ts'] = 'Вы не можете пользоваться ТС во избежание конфликта интересов';
        }
        if (answer['ts'] != answer['ts'] || answer['ts'] == '') {
            result['ts'] = 'Это поле не может быть пустым';
        }

        // от 1 до 2
        try {
            answer['kids'] = parseFloat(answer['kids']);
        }
        catch(e) {
            result['kids'] = 'В данном поле необходимо указать число';
        }
        if (answer['kids'] <= 1) {
            result['kids'] = 'Вы должны обладать хотя бы двумя детьми для работы в нашей компании';
        }
        if (answer['kids'] >= 2) {
            result['kids'] = 'Форма не поддерживает указание более чем одного ребёнка, укажите одного ребёнка';
        }
        if (answer['kids'] != answer['kids'] || answer['kids'] == '') {
            result['kids'] = 'Это поле не может быть пустым';
        }

        // 11.0
        if (answer['kidsage'] === "11") {
            result['kidsage'] = 'Вы не можете указывать какое попало значение в это поле';
        }
        try {
            answer['kidsage'] = parseFloat(answer['kidsage']);
        }
        catch (e) {

        }
        if (answer['kidsage'] != 11) {
            result['kidsage'] = 'Указанное значение не отражает возраст ваших детей';
        }
        if (answer['kidsage'] != answer['kidsage'] || answer['kidsage'] == '') {
            result['kidsage'] = 'Это поле не может быть пустым';
        }

        // пусто
        if (answer['pet'] != "") {
            result['pet'] = 'Укажите другое значение';
        }

        // 6400
        try {
            answer['salary'] = parseInt(answer['salary']);
            if (answer['salary'] < 6400) {
                result['salary'] = 'Необходимо указать большую сумму';
            }
            if (answer['salary'] > 6400) {
                result['salary'] = 'Наша компания не готова предоставить вам такую зарплату';
            }
        }
        catch(e) {
            result['salary'] = 'Укажите точную сумму';
        }
        if (answer['salary'] != answer['salary'] || answer['salary'] == '') {
            result['salary'] = 'Это поле не может быть пустым';
        }

        // больше 10
        try {
            answer['mark'] = parseInt(answer['mark']);
            if (answer['mark'] <= 10) {
                result['mark'] = 'Вы нам не подоходите';
            }
        }
        catch {
            result['mark'] = 'Данное поле поддерживает только числа';
        }
        if (answer['mark'] != answer['mark'] || answer['mark'] == '') {
            result['mark'] = 'Это поле не может быть пустым';
        }

        result['state'] = flag;
        for (let i = 0; i < types.length; i ++) {
            if (result[types[i]] != '') {
                result['state'] = 'требует доработки';
            }
        }

        wsClient.send(JSON.stringify(result));


    });

}


function nameCheck (name) {
    for (let i = 0; i < name.length; i ++) {
        for (let j = 0; j < 10; j ++) {
            if (name[i] == j) return true
        }
    }
    return false
}






























//let m = "11.0"

//if (m == "11") console.log(1);

//if (m != 11) console.log(2);