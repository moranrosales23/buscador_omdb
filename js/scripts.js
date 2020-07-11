//import { Request } from './services/Request.js';
//new Request();
import { init } from './Services/Redirect.js';
import { Menu } from './Class/Menu.js';
import { Favorite } from './Class/Favorite.js';
import { Movie } from './Class/Movie.js';


const MENU = new Menu();
const FAVORITE = new Favorite();
const MOVIE = new Movie();
document.addEventListener('DOMContentLoaded', () => {
    init();
    FAVORITE.addEvent();
    MENU.dropDown();
    MENU.user();
    if (window.location.pathname.indexOf('movies.html') !== -1) {
        MOVIE.listAll(document.getElementById('movies'));

    }
});