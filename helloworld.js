var http = require('http');
 
var ip = '127.0.0.1';

var port = 3000;

var server = http.createServer(function (req, res) {
    // funziona quando viene ricaricata la pagina
    // viene scritto 2 volte, una x la favicon, 1 x il file html
    console.log('ricevuta richiesta - ');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!!!! we\'re using port ' + port);

})
 
server.listen(port, ip);
 
console.log('Server running at http://' + ip + ':' + port + '/');
