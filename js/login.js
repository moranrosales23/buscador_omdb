import { Sesion } from './services/Sesion.js';
import { init } from './services/Redirect.js';
const SESION = new Sesion();
document.addEventListener('DOMContentLoaded', init);
document.getElementById('form').addEventListener('submit', login);

function login(event) {
    stopEventSubmit(event);
    const user = {};
    user.nick = document.getElementById('txt_user').value;
    user.pass = document.getElementById('txt_pass').value;
    SESION.login(user);
}

function stopEventSubmit(event) {
    event.stopPropagation();
}