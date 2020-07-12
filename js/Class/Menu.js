import { Sesion } from '../Services/Sesion.js';
import { Request } from '../Services/Request.js';
import { Movie } from './Movie.js';

const SESION = new Sesion();
const REQUEST = new Request();
const MOVIE = new Movie();
export function Menu() {
    this.dropDown()
    this.user()
    document.getElementById('log-out').addEventListener('click', this.logOut);
};

Menu.prototype.dropDown = function() {
    document.querySelector('.navbar-top__user').addEventListener('click', function() {
        this.querySelector('.dropdown').classList.toggle('show');
    });
}

Menu.prototype.user = function() {
    document.getElementById('user').innerHTML = `${SESION.getData().nick}<i class="fas fa-angle-down"></i>`;
}

Menu.prototype.logOut = function(event) {
    event.preventDefault();
    event.stopPropagation();
    SESION.clear();
    window.location.reload();
}

Menu.prototype.search = function() {
    document.getElementById('txt_search').addEventListener('keyup', function(event) {
        const search_movie = this.value.trim();
        const reference_movie = document.getElementById('movies');
        if (search_movie !== '') {
            REQUEST.searchMovieByTitle(search_movie).then((movie) => {
                if (movie.hasOwnProperty('Error')) {
                    reference_movie.innerHTML = '<p class="message">Movie or Serie not exists.</p>'
                } else {
                    reference_movie.innerHTML = MOVIE.template(movie);
                }
            });
        } else {
            MOVIE.listAll(reference_movie);
        }
    });
}