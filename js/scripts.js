import { init } from './Services/Redirect.js';
import { Menu } from './Class/Menu.js';
import { Favorite } from './Class/Favorite.js';
import { Movie } from './Class/Movie.js';


const MENU = new Menu();
const FAVORITE = new Favorite();
const MOVIE = new Movie();
document.addEventListener('DOMContentLoaded', () => {
    init();
    if (window.location.pathname.indexOf('movies.html') !== -1) {
        MOVIE.listAll(document.getElementById('movies'));
        MENU.search();
        if (sessionStorage.hasOwnProperty('last_search')) {
            const txt_search = document.getElementById('txt_search');
            txt_search.value = sessionStorage.getItem('last_search');
            sessionStorage.removeItem('last_search');
            MENU.requestMovie.call(txt_search);
        }
    } else if (window.location.pathname.indexOf('favorites.html') !== -1) {
        MOVIE.favorite();
    } else {
        MOVIE.viewDescription();
    }
    FAVORITE.addEvent();
});