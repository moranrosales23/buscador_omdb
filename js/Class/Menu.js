import { Sesion } from '../Services/Sesion.js';

const SESION = new Sesion();

export function Menu() {};

Menu.prototype.dropDown = function() {
    document.querySelector('.navbar-top__user').addEventListener('click', function() {
        this.querySelector('.dropdown').classList.toggle('show');
    });
}

Menu.prototype.user = function() {
    document.getElementById('user').innerHTML = `${SESION.getData().nick}<i class="fas fa-angle-down"></i>`;
}