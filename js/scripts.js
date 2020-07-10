//import { Request } from './services/Request.js';
//new Request();
import { init } from './services/Redirect.js';
import { Menu } from './Menu.js';

const MENU = new Menu();

document.addEventListener('DOMContentLoaded', () => {
    init();
    MENU.dropDown();
});