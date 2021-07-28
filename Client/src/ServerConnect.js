import Swal from 'sweetalert2';
import Render from './index.js';

function isLeagalInput(input, mini, maxi) {
    let illeagal = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?`~ ";
    if (input.length < mini) return 'minlength'
    if (input.length > maxi) return 'maxlength'
    for (let i = 0; i < illeagal.length; i++) {
        if (input.indexOf(illeagal[i]) != -1) {
            return 'symbol'
        }
    }
    return 'ok'    
}

export default function Connect(type) {
    if (type === 'AUTH') {
       sendAuth();
    }
    if (type === 'LOGOUT') {
        LogOut();
    }
    if (type === 'FLAG') {
        Flag();
    }
    if (type === 'UPDATE') {
        GetInfo();
    }
    if (type === 'REGISTRATION') {
        Registrate();
    }


    function Flag () {
        let flagHolder = document.getElementById('flag').value;
        if (isLeagalInput(flagHolder, 0, 100) != 'ok') {
            Swal.fire({
                title: 'Oops..',
                text: 'В твоем флаге странные символы!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        }
        else {
            let flagSendObj = {
                action: 'FLAG',
                flag: flagHolder,
                key: localStorage.getItem('k')
            }
            sock.send(JSON.stringify(flagSendObj));
            document.getElementById('flag').value = '';
        }
    }

    function Registrate() {
        let login, password, mail;

        login = document.getElementById('reglogin').value; //  получаем логин, пароль из инпута
        password = document.getElementById('regpassword').value;
        mail = document.getElementById('mail').value;

        document.getElementById('reglogin').value = '';
        document.getElementById('regpassword').value = '';
       
        if (isLeagalInput(login, 3, 15) == 'ok' && isLeagalInput(password, 8, 15) == 'ok') {
            let messageJSON = {
                action: 'REGISTRATION',
                login: login,
                password: password,
                mail: mail
            } // формируем запрос на сервер
   
            sock.send(JSON.stringify(messageJSON));
        }
        else if (isLeagalInput(login, 3, 15) == 'symbol') {
            Swal.fire({
                title: 'Oops..',
                text: 'Ник содержит недопустимый символ',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(password, 8, 15) == 'symbol') {
            Swal.fire({
                title: 'Oops..',
                text: 'Пароль содержит недопустимый символ!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(login, 3, 15) == 'maxlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Ник не может быть длиннее 15 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
            
        } 
        else if (isLeagalInput(password, 8, 15) == 'maxlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Пароль не может быть длиннее 15 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(login, 3, 15) == 'minlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Ник не может быть короче 3 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(password, 8, 15) == 'minlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Пароль не может быть короче 8 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        }   
        
    }

    function sendAuth() {
        let login, password;

        login = document.getElementById('login').value; //  получаем логин, пароль из инпута
        password = document.getElementById('password').value;
       
        if (isLeagalInput(login, 3, 15) == 'ok' && isLeagalInput(password, 8, 15) == 'ok') {
            let messageJSON = {
                action: 'AUTH',
                login: login,
                password: password
            } // формируем запрос на сервер
   
            sock.send(JSON.stringify(messageJSON));
        }
        else if (isLeagalInput(login, 3, 15) == 'symbol') {
            Swal.fire({
                title: 'Oops..',
                text: 'Ник содержит недопустимый символ',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(password, 8, 15) == 'symbol') {
            Swal.fire({
                title: 'Oops..',
                text: 'Пароль содержит недопустимый символ!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(login, 3, 15) == 'maxlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Ник не может быть длиннее 15 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
            
        } 
        else if (isLeagalInput(password, 8, 15) == 'maxlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Пароль не может быть длиннее 15 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(login, 3, 15) == 'minlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Ник не может быть короче 3 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        } 
        else if (isLeagalInput(password, 8, 15) == 'minlength') {
            Swal.fire({
                title: 'Oops..',
                text: 'Пароль не может быть короче 8 символов!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        }     

    }
}

function AuthError (error) {
    if (error.error === 'WRONG') {
        Swal.fire({
            title: 'Неверные данные!',
            icon: 'error',
            confirmButtonColor: '#8a86ca',
        });
    }
}

function Auth (key) {
    let s = key.key;
    localStorage.setItem('k', s);
    Render();

}

function getKey () {
    return localStorage.getItem('k')
}

function LogOut () {
    localStorage.removeItem('k');
    Render();
}

function UpdateTasks (tasks) {
    let newTasks = tasks['INFO']
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}

function UpdateScore(table) {
    let newTable = {}
    let ns = Object.keys(table);
    for (let i = 1; i < ns.length; i++) {
        newTable[ns[i]] = table[ns[i]];
    }
    localStorage.setItem('table', JSON.stringify(table));
}

function UpdateCats (cats) {
    localStorage.setItem('recon', cats['RECON']);
    localStorage.setItem('crypto', cats['CRYPTO']);
    localStorage.setItem('stego', cats['STEGO']);
    localStorage.setItem('web', cats['WEB']);
    localStorage.setItem('ppc', cats['PPC']);
    localStorage.setItem('misc', cats['MISC']);
}

function GetInfo() {
    if (sock != null) {
        let kkk = localStorage.getItem('k');
        let get = {
            action: 'GETINFO',
            key: kkk,
        }
        sock.send(JSON.stringify(get));
        console.log('Getting info');
    }
    
}





// дальше обработка подключения

let sock = new WebSocket("ws://45.90.34.131:9090");

sock.onerror = function (er) {
    Swal.fire({
        title: 'Ошибка подключения к серверу!',
        icon: 'error',
        confirmButtonColor: '#8a86ca',
    });
    LogOut();
}

sock.onopen = function(e) {
    console.log("[open] Соединение установлено");
    GetInfo();

};

sock.onclose = function(e) {
    console.log("[close] Соединение разорвано");
    Swal.fire({
        title: 'Ошибка подключения к серверу!',
        icon: 'error',
        confirmButtonColor: '#8a86ca',
    });
}
sock.onmessage = function(event) {
    let callback = JSON.parse(event.data);
    let action = callback.action;
    console.log(callback);
    if (action === 'AUTHERROR') AuthError(callback);
    if (action === 'AUTH') Auth(callback);
    if (action === 'UPDATETASKS') UpdateTasks(callback);
    if (action === 'UPDATESCORE') UpdateScore(callback);
    if (action === 'UPDATECATEGORIES') UpdateCats(callback);
    if (action === 'FLAG') {
        if (callback.result === 'ok') {
            Swal.fire({
                title: 'Флаг успешно сдан!',
                icon: 'success',
                confirmButtonColor: '#8a86ca',
            });
        }
        else if (callback.result === 'old') {
            Swal.fire({
                title: 'Ты уже сдавал этот флаг!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        }
        else if (callback.result === 'wrong') {
            Swal.fire({
                title: 'Неверный флаг!',
                icon: 'error',
                confirmButtonColor: '#8a86ca',
            });
        }
    }
    if (action === 'DEAUTH') {
        LogOut();
    }
    if (action === 'REG') {
        Swal.fire({
            title: 'Вы успешно зарегистрированы!',
            icon: 'success',
            confirmButtonColor: '#8a86ca',
        });
    }
    if (action === 'REGERRORLOGIN') {
        Swal.fire({
            title: 'Ник уже занят!',
            icon: 'error',
            confirmButtonColor: '#8a86ca',
        });
    }
    if (action === 'REGERROR') {
        alert('Непонятная ошибка на сервере!')
    }

};
