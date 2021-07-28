import Cookies from 'js-cookie';

function setCookies(name, context){
    Cookies.set(name, context);
}

export default setCookies;