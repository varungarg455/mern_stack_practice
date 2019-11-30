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
        var exchange = 'logs';

        channel.assertExchange(exchange, 'fanout', {
            durable: false
        });

        channel.assertQueue('', {
            exclusive: true
        }, function(err_queue, q){
            if(err_queue){
                throw err_queue;
            }
            console.log(`Waiting for messages in queue: ${q.queue}`);
            channel.bindQueue(q.queue, exchange, '');
            channel.consume(q.queue, function(msg){
                if(msg.content){
                    console.log(msg.content.toString());
                } else{
                    console.log('No content found');
                }
            },{
                noAck: true
            });
        });
    });
});