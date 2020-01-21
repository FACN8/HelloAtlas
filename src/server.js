const http = require('http');
const router = require('./src/router');
const server = http.createServer(router);

server.listen(SERV, () => {
    console.log('Server is listening on port 5050,armed and ready!');

});