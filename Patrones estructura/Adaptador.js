/* Sirve para actualizar nuestra libreria 
y se sigue utilizando la mismas cosas */

class Api { // V1
    constructor() {
        this.operations = function(url, opts, verb) {
            switch(verb) {
                case 'get':
                    // return fetch...
                case 'post':
                    // return fetch...
                default: 
                    return;
            }
        }
    }
}

class Api2 { // V2
    constructor() {
        this.get = function(url, opts) {
            // return axios.get...
        }
        this.post = function(url, opts) {
            //return axios.post...
        }
    }
}

class ApiAdaptader {
    constructor() {
        const api2 = new Api2();
        this.operations = function(url, opts, verb) {
            switch(verb) {
                case 'get':
                    return api2.get(url, opts);
                case 'post':
                    return api2.post(url, opts);
                default: 
                    return;
            }
        }       
    }
}

/* Como se utiliza */
const api = new Api();
api.operations('www.google.com', { q: 1 }, 'get');

const api2 = new Api2();
api2.get('www.google.com', { q: 1 }, 'get');

const adapter = new ApiAdaptader();
adapter.operations('www.google.com', { q: 1 }, 'get');