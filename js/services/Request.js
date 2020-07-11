const API = 'http://www.omdbapi.com/?apikey=b9ef8519&';

export function Request() {}

Request.prototype.searchMovieByTitle = function(name) {
    return fetch(`${API}t=${name}`).then(response => response.json());
}