var amqp = require('amqplib/callback_api');

var url = "amqp://mjeayvar:oQ2qwcyqZp2fLc50inxalbYtgdp_stg-@vulture.rmq.cloudamqp.com/mjeayvar";

amqp.connect(url, function (err_conn, conn) {
    if (err_conn) {
        throw err_conn;
    }
    conn.createChannel(function (err_channel, channel) {
        if (err_channel) {
            throw err_channel;
        }
        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.consume(queue, function(msg){
            console.log(`Received message : ${msg.content.toString()}`);
        }, {noAck: true});
        
    });
});