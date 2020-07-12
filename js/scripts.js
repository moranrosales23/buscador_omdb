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
    } else if (window.location.pathname.indexOf('favorites.html') !== -1) {
        MOVIE.favorite();
    } else {
        MOVIE.viewDescription();
    }
    FAVORITE.addEvent();
});