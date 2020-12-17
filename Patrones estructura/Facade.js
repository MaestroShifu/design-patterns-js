/* Simplifica una implementacion con un wrapper */

const https = require('https');

/* jsonplaceholder.typicode.com */

const get = url => new Promise((resolve, reject) => {
    const comp = url.split('/');
    const host = comp.shift();
    const options = {
        hostname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    };
    
    const req = https.request(options, res => {
        res.setEncoding('utf8');
        let body = '';
        res.on('data', d => {
            body += d;
        });
        res.on('end', d => {
            const parsed = JSON.parse(body);
            resolve(parsed)
        });
    });
    
    req.on('error', (e) => {
        reject(e);
    });
    
    req.end();
})

const main = async() => {
    // Simplificamos el uso de una libreria, [solo hace una cosa]
    const resolve = await get('jsonplaceholder.typicode.com/users');
    console.log(resolve)
}

main();