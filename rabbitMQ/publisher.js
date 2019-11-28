const amqp = require('amqplib');

const msg = {number: 19}
connect();
async function connect() {
    try {
        const connection = await amqp.connect("amqp://mjeayvar:oQ2qwcyqZp2fLc50inxalbYtgdp_stg-@vulture.rmq.cloudamqp.com/mjeayvar");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");    // will check if queue exists, or else creates it.
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log("Job sent successfully");
    } catch (ex) {
        console.log(ex);
    }
}