import Render from './index.js';
import Connect from './ServerConnect.js';

export default function Navbar() {
    let aNames = [
        'СКОРБОРД',
        'ТАСКИ',
        'ТУТОРИАЛ',
        'Q & A'
    ]

    let path; 

    if (localStorage.getItem('path') != null) {
      path = localStorage.getItem('path');
    }
    else {
      path = 'Q & A';
    }

    function setPath (s) {
      localStorage.setItem('path', s);
      Connect('UPDATE');
      Render();
    }

    return (
        <div className='top-menu-wrapper'>
          <a  href='/'  className='logo'>
            <img src='./logo.png'  className='logo'/>
          </a>
          
          <nav className='top-menu'>
            <a className='menu-href'>
              <img src='./exit.svg'  onClick={() => Connect('LOGOUT')} className='exit-img'/>
            </a>      
            {aNames.map(name => {
                if (name === path)
                    return <a className='menu-href' onClick={() => setPath(name)} href='#'><b>{name}</b></a>
                else 
                    return <a className='menu-href' onClick={() => setPath(name)} href='#'>{name}</a>
            })} 
          </nav>
          <div className='top-menu'>
            <div className='flag-input-form'>
              <input className='flag-input' autocomplete="off" id="flag" name="flag" placeholder="error_[A-Za-z0-9_]+" minLength='5' required="true" type="text"></input>
              <button className='flag-button' onClick={() => Connect('FLAG')}>сдать флаг</button>
            </div>
          </div>          
        </div>
    );
}
