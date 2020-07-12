import { Storage } from '../Services/Storage.js';

const STORAGE = new Storage();

export function Favorite() {}
//href="./movie.html?q="
Favorite.prototype.addEvent = function() {
    document.getElementById('movies').addEventListener('click', event => {
        if (event.target.classList.contains('fa-heart')) {
            event.target.classList.toggle('favorite_active');
            this.addOrRemove(event);
        } else if (event.target.classList.contains('body__card--button')) {
            if (event.target.outerText === ' Ver') {
                sessionStorage.setItem('path', window.location.pathname);
                window.location.href = `${window.location.origin}/pages/movie.html?q=${event.target.dataset.idm}`;
            } else {
                const path = sessionStorage.getItem('path');
                sessionStorage.removeItem('path');
                window.location.href = `${window.location.origin}${path}`;
            }
        }
    });
}

Favorite.prototype.addOrRemove = function(event) {
    const id_movie = event.target.dataset.idm;
    STORAGE.action(id_movie);
}