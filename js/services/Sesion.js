export function Sesion() {}

Sesion.prototype.login = function({ nick, pass }) {
    const hash = this.generateHash(`${nick}${pass}`);
    if (this.exists()) {
        sessionStorage.clear();
    }
    this.save({ hash, nick });
}

Sesion.prototype.generateHash = function(credentials) {
    return credentials.split('').reduce((prev, current) => {
        return (((prev << 5) - prev) + current.charCodeAt(0)) | 0
    }, 0);
}

Sesion.prototype.exists = function() {
    return sessionStorage.hasOwnProperty('user');
}

Sesion.prototype.save = function(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
}

Sesion.prototype.getData = function() {
    const session = JSON.parse(sessionStorage.getItem('user'));
    return session;
}