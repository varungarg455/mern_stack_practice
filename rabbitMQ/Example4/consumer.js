var amqp = require('amqplib/callback_api');

var url = "amqp://mjeayvar:oQ2qwcyqZp2fLc50inxalbYtgdp_stg-@vulture.rmq.cloudamqp.com/mjeayvar";

var args = process.argv.slice(2);

if (args.length == 0) {
    console.log("Usage: receive_logs_direct.js [info] [warning] [error]");
    process.exit(1);
}

amqp.connect(url, function (err_conn, conn) {
    if (err_conn) {
        throw err_conn;
    }
    conn.createChannel(function (err_channel, channel) {
        if (err_channel) {
            throw err_channel;
        }
        var exchange = 'direct_logs';

        channel.assertExchange(exchange, 'direct', {
            durable: false
        });

        channel.assertQueue('', {
            exclusive: true
        }, function (err_queue, q) {
            if (err_queue) {
                throw err_queue;
            }
            console.log(`Waiting for messages in queue: ${q.queue}`);

            args.forEach(function (severity) {
                channel.bindQueue(q.queue, exchange, severity);
            });

            channel.consume(q.queue, function (msg) {
                console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
            }, {
                noAck: true
            });
        });
    });
});