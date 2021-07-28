import './App.css';
import Cookies from 'js-cookie';
import setCookies from './Cookie.js';
import Navbar from './Navbar.js';
import MainBodyCreator from './MainBodyCreator.js';
import React from 'react';
import Ad from './Ad.js';
import Auth from './Auth.js';
import Connect from './ServerConnect.js';
import Swal from 'sweetalert2';

function isLogedIn () {
  if (localStorage.getItem('k') != null) return true
  else return false
}

function AdapAlert () {
  if (localStorage.getItem('adapt') == null) {
    Swal.fire({
      title: 'Сайт не адаптирован под мобильные устройства!',
      confirmButtonColor: '#8a86ca',
    });
    localStorage.setItem('adapt', 'alerted');
  }
}

function App() {
  let path; // состояние страницы, какой раздел открыт

  if (localStorage.getItem('path') != null) {
    path = localStorage.getItem('path'); // достаем из стореджа состояние
  }
  else {
    path = 'Q & A'; // если сторедж пуст
  }
  
  if (isLogedIn()) //если залогинился
    return (
      <div className='big-wrapper'>
      
        {Navbar()}
        {MainBodyCreator(path)}

      </div>
    );


  else //если не ввел логин:пароль кидаем на форму логирования:регистрации
    return (
      <div>
        {Auth()}
        {AdapAlert()}
      </div>
    );
}

export default App;
