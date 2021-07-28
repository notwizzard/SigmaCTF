import Connect from './ServerConnect.js';

export default function Auth () {
    return (
        <div className='auth-wrapper'>
            <div className='auth-logo'>
                <a  href='/'  className=''>
                    <img src='./logo.png'  className=''/>
                </a>
            </div>
            <br/>
            <div className='authBlock'>
                <div className='auth-form-wrapper'>
                    <div className='auth-form'>
                        <h2>Авторизация</h2>
                        <input id="login" name="pass" placeholder="Логин" autoComplete='off' maxLength='20' className='input-auth'/>
                        <input id="password" name="pass" placeholder="Пароль" autoComplete='off' type='password' maxLength='20' className='input-auth'/>
                        <button onClick={() => Connect('AUTH')} name="auth" className='auth-button'>Войти</button>
                    </div>
                </div>
                

                <div className='auth-form-wrapper'>
                    <div className='auth-form'>
                        <h2>Регистрация</h2>
                        <input id="mail" name="pass" autoComplete='off' placeholder="Почта" className='input-auth' maxLength='50' type='email'/>
                        <input id="reglogin" name="pass" autoComplete='off' placeholder="Ник / Логин" maxLength='20' className='input-auth'/>
                        <input id="regpassword" name="pass" autoComplete='off' placeholder="Пароль" type='password' maxLength='20' className='input-auth'/>
                        <button onClick={() => Connect('REGISTRATION')} name="auth" className='auth-button'>Создать аккаунт</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
