//let sock = new WebSocket("ws://localhost:5005");
let sock = new WebSocket("ws://45.90.34.131:5005");

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

sock.onmessage = function(event) {
    let result = JSON.parse(event.data);
    for (let i = 0; i < types.length; i ++) {
        document.getElementById("err" + types[i]).textContent = result[types[i]];
    }
    document.getElementById("state").textContent = "Состояние: " + result['state'];
}

function Sender() {
    let answer = { };
    for (let i = 0; i < types.length; i ++) {
        answer[types[i]] = document.getElementById(types[i]).value;
    }
    document.getElementById("state").textContent = "Состояние: отправлено на проверку";
    sock.send(JSON.stringify(answer));

}