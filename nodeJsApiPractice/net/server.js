var net = require('net');
var server = net.createServer(function(connection) {
   console.log('client connected');
   connection.on('end', function() {
      console.log('client disconnected');
   });
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});
  server.listen(8080, function() {
  console.log('server is listening');
});

/* Needed to open port 8080 on server
<server>$ node server.js
server is listening
client connected
client disconnected

<client>$ node client.js
connected to server!
Hello World!

disconnected from server
*/
