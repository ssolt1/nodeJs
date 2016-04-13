var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('connected to server!');
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() {
   console.log('disconnected from server');
});

/* on client, add the host info in line 2
var net = require('net');
var client = net.connect({host: '<hostname>', port: XXXX}, function() {
	   console.log('connected to server!');
});

*/
