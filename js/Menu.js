export function Menu() {};

Menu.prototype.dropDown = function() {
    document.querySelector('.navbar-top__user').addEventListener('click', function() {
        this.querySelector('.dropdown').classList.toggle('show');
    });
}