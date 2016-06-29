'use strict';

const Hapi = require('hapi');
const FinalServer = 'destruti.com/';

var http = require('http');
var querystring = require('querystring');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost',
    port: 8081
});

server.route({
    method: 'POST',
    path: '/destruti/{method}',
    handler: function (request, reply) {

	var json = request.payload;
	var postData = querystring.stringify(json);

	var options = {
	  hostname: FinalServer,
	  port: 80,
	  path: '/' + request.params.method,
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/x-www-form-urlencoded',
	    'Content-Length': Buffer.byteLength(postData)
	  }
	};
	
	var req = http.request(options, (res) => { 

		console.log('STATUS: ' + res.statusCode);
		console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		res.on('data', function (chunk) {

		    	console.log('BODY: ' + chunk);
			return reply(chunk);


		});
		res.on('end', function() {
		    console.log('No more data in response.')
		})

	});

	req.on('error', (e) => { console.log('problem with request: ${e.message}');});
	req.write(postData);
	req.end();


    }
});

// Start the server
server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri + '/destruti/');
});