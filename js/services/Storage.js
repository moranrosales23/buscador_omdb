import { Sesion } from './Sesion.js';

const STORAGE = new Sesion();
export function Storage() {}

Storage.prototype.action = function(favorite) {
    const favorites = this.favorites();
    const hash = STORAGE.getData().hash;
    if (favorites.hasOwnProperty(hash)) {
        this.saveOrDelete(favorites[hash], favorite);
    } else {
        favorites[hash] = [favorite];
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

Storage.prototype.favorites = function() {
    this.createKeyStorage();
    const data = JSON.parse(localStorage.getItem("favorites"));
    return data;
}

Storage.prototype.existsKeyStorage = function(key) {
    return localStorage.hasOwnProperty(key);
}

Storage.prototype.createKeyStorage = function() {
    if (!this.existsKeyStorage("favorites")) {
        localStorage.setItem("favorites", "{}");
    }
}

Storage.prototype.saveOrDelete = function(data, favorite) {
    const index = data.indexOf(favorite);
    if (index !== -1) {
        data.splice(index, 1);
    } else {
        data.push(favorite);
    }
}

Storage.prototype.existsID = function(id) {
    const favorites = this.favorites();
    const hash = STORAGE.getData().hash;
    if (favorites.hasOwnProperty(hash)) {
        return favorites[hash].includes(id);
    }
    return false;
}