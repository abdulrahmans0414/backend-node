const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url==='/'){
        res.end('Home page');
    }
    else if(req.url==='/contect'){
        res.end('Contect page');
    }
    else if(req.url==='/about'){
        res.end('About page');
    }
    else {
        res.end('page not found');
    }
});

server.listen(8080,()=>{
    console.log('server listening on port 8080');
})