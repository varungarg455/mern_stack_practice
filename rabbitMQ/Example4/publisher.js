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
        var exchange = 'direct_logs';
        var args = process.argv.slice(2);
        var msg = args.slice(1).join(' ') || 'Hello World!';
        var severity = (args.length > 0) ? args[0] : 'info';

        //durable means that queue will not be lost if server restarts
        channel.assertExchange(exchange, 'direct', {
            durable: false
        });

        channel.publish(exchange, severity, Buffer.from(msg));
        console.log(`Sent to exchange ${severity} : ${msg}`);
    });

    setTimeout(function () {
        conn.close();
        process.exit(0)
    }, 500);
});