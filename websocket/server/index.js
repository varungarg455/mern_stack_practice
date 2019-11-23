var server = require('ws').Server;
var uniqid = require('uniqid');

var s = new server({ port: 5001 });

s.on('connection', function (ws) {

    ws.id = uniqid();

    ws.on('message', function (message) {
        message = JSON.parse(message);

        if (message.type == 'name') {
            ws.name = message.data;
        } else if (message.type == 'message') {
            s.clients.forEach(function e(client) {
                if (client != ws) {
                    client.send(JSON.stringify({
                       name: client.name,
                       data: message.data 
                    }));
                }
            });
        }
        //ws.send(message);
    });

    ws.on('close', function () {
        console.log('I have lost a client');
    });

    console.log('One more client connected');
});