import { Sesion } from './Sesion.js';

const public_route = ['/index.html', '/'];
const SESION = new Sesion();

export function init() {
    if (SESION.exists() && isPublic()) {
        window.location.href = `${window.location.origin}/pages/movies.html`;
    } else if (!SESION.exists() && !isPublic()) {
        window.location.href = `${window.location.origin}/index.html`;
    } else {
        document.querySelector('body').style.display = 'block';
    }
}

function isPublic() {
    return public_route.includes(window.location.pathname);
}