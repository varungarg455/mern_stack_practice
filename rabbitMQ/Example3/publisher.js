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
        var msg = process.argv.slice(2).join(' ') || "Hello World!";

        //durable means that queue will not be lost if server restarts
        channel.assertExchange(exchange, 'fanout', {
            durable: false
        });

        channel.publish(exchange, '', Buffer.from(msg));
        console.log(`Sent to exchange ${msg}`);
    });

    setTimeout(function () {
        conn.close();
        process.exit(0)
    }, 500);
});