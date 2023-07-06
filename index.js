const http = require('http');

const server = http.createServer(()=>{
    console.log('Servered');
});

server.listen(8080,()=>{
     console.log('Server is working');
});