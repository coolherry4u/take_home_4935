let Hapi = require('hapi');

let server = new Hapi.Server();
server.connection({
   host: 'localhost',
   port: Number(8080)
});

server.start(function() {
   console.log('Server running at:', server.info.uri);
});
server.route(require("./route.js"))