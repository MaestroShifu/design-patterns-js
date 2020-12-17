/* Un objeto mediador, 
se encarga de despachar y escuchar los eventos de otros objetos */

const Emitter = (() => {
    const topics = {};
    const hOP = topics.hasOwnProperty;

    return {
        on: (topic, listener) => {
            if(!hOP.call(topics, topic))
                topics[topic] = [];
            topics[topic].push(listener);    
        },
        emit: (topic, info) => {
            if(!hOP.call(topics, topic))
                return;
            topics[topic].forEach(item => {
                item(info != undefined ? info : {});
            });
        }
    };
})();

Emitter.on('lala', x => console.log(x));

Emitter.emit('lala', { lala: 'lolo' });

/* Nodejs Mediador */
/* const Emitter = require('events');
const emitter = new Emitter();

emitter.on('lala', x => console.log(x));
emitter.emit('lala', { lala: 'lolo' }); */