/* Se encarga de modificar la declaracion del padre, 
por ende afecta a todos los hijos  */

Object.prototype.log = function() {
    console.log(this);
}

const x = { a: 1};

x.log(); /* { a: 1 } */

if(!String.prototype.trim) {
    String.prototype.trim = function() {
        try {
            return this.replace(/^\s+|\s+$/g, "");
        } catch (e) {
            return this;
        }
    }
}

const y = "      Hola mundo     ".trim();
y.log(); /* [String: 'Hola mundo'] */