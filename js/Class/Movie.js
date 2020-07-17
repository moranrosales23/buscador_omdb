import { Storage } from '../Services/Storage.js';
import { Sesion } from '../Services/Sesion.js';
import { Request } from '../Services/Request.js';

const STORAGE = new Storage();
const SESION = new Sesion();
const REQUEST = new Request();

export function Movie() {}

Movie.prototype.template = function(data) {
    return `
        <div class="movies__body--card">
            <div class="movies__body--card-row">
                <img class="body__card--img" src="${this.getUrlPoster(data.Poster)}" alt="poster" />
                <i class="fas fa-heart ${this.addClass(data.imdbID)}" title="add favorite" data-idm="${data.imdbID}"></i>
            </div>
            <span class="body__card--score">
                <i class="fas fa-calendar-alt"></i>${data.Year}
            </span>
            <h4 class="body__card--title">${data.Title}</h4>
            <button type="button" data-idm="${data.imdbID}" class="body__card--button">
                <i class="far fa-eye"></i> See
            </button>
        </div>
    `;
}
Movie.prototype.getUrlPoster = function(url) {
    return (url === "N/A" || url === null) ? '../img/no_image.jpg' : url;
}
Movie.prototype.listAll = async function(elementHtml) {
    if (elementHtml === null) return;
    /**
     * los datos estaticos para visualizar, con el fin de evitar el exceso de peticiones diarias, extraidos de la api OMdb.
     **/
    const data = await REQUEST.getDataDefault();
    this.fillPage(data, elementHtml);
}

Movie.prototype.fillPage = function(movies, elementHtml) {
    elementHtml.innerHTML = '';
    let html = '';
    for (const iterator of movies.Search) {
        html += this.template(iterator);
    }
    elementHtml.innerHTML = html;
}

Movie.prototype.favorite = function() {
    const hash = SESION.getData().hash;
    const favorites = STORAGE.favorites();
    if (favorites.hasOwnProperty(hash)) {
        for (const favorite of favorites[hash]) {
            REQUEST.searchMovieByID(favorite).then(movie => {
                document.getElementById('movies').innerHTML += this.template(movie);
            });
        }
    }
}

Movie.prototype.viewDescription = function() {
    const id = window.location.href.split('?q=');
    const reference = document.getElementById('movies');
    if (id.length === 2) {
        REQUEST.searchMovieByID(id[1]).then(data => {
            if (data.hasOwnProperty('Error')) {
                this.messageError(reference);
            } else {
                reference.innerHTML = this.descriptionMovie(data);
            }
        });
    } else {
        this.messageError(reference);
    }
}

Movie.prototype.messageError = function(reference_html) {
    reference_html.innerHTML = '<p class="message">Movie or Serie not exists.</p>';
}

Movie.prototype.descriptionMovie = function(data) {
    return `
        <div class="main__description--poster">
            <img class="img" src="${this.getUrlPoster(data.Poster)}" alt="poster" />
            <i class="fas fa-heart ${this.addClass(data.imdbID)}" title="add favorite" data-idm="${data.imdbID}"></i>
        </div>
        <div class="main__description--data">
            <h2>${data.Title}(${data.Year})</h2>
            <hr />
            <div class="description__data--body">
                <p><span class="data__body--subtitle">Director: </span>${data.Director}</p>
                <p><span class="data__body--subtitle">Actors: </span>${data.Actors}</p>
                <p><span class="data__body--subtitle">Genre: </span>${data.Genre}</p>
                <p><span class="data__body--subtitle">Released: </span>${data.Released}</p>
                <p>
                    <span class="data__body--subtitle">Score: </span>
                    <span class="body__card--score">
                        <i class="fas fa-star"></i>${data.imdbRating}
                    </span>
                </p>
                <p>
                    <span class="data__body--subtitle">Description: </span> ${data.Plot}
                </p>
                <button class="body__card--button" type="button">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
            </div>
        </div>
    `;
}

Movie.prototype.addClass = function(id) {
    return STORAGE.existsID(id) ? 'favorite_active' : '';
}