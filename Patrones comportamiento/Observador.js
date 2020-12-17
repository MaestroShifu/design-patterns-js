/* Escucha u evento y ejecuta codigo [add event listeners] */

const user = new user();

const init = () => {
    user.on('login', userLoggedIn)
}

const userLoggedIn = () => {
    // User inicia session
}

app.init();

const login = () => {
    // hacemor login

    // Luego:
    user.trigger('login');
}

login();