import { Storage } from '../Services/Storage.js';

const STORAGE = new Storage();

export function Favorite() {}

Favorite.prototype.addEvent = function() {
    document.getElementById('movies').addEventListener('click', event => {
        if (event.target.classList.contains('fa-heart')) {
            event.target.classList.toggle('favorite_active');
            this.addOrRemove(event);
        }
    });
}

Favorite.prototype.addOrRemove = function(event) {
    const id_movie = event.target.dataset.idm;
    STORAGE.action(id_movie);
}