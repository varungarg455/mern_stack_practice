var mqtt = require('mqtt'), url = require('url');
// Parse
var url = "mqtt://vulture.rmq.cloudamqp.com";

//username: auth[0] + ":" + auth[0] if you are on a shared instance
var options = {
  port: 1883,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: "mjeayvar:mjeayvar",
  password: "oQ2qwcyqZp2fLc50inxalbYtgdp_stg-"
};

// Create a client connection
var client = mqtt.connect(url, options);

client.on('connect', function() { // When connected

  // subscribe to a topic
  client.subscribe('hello/world', function() {
    // when a message arrives, do something with it
    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });

  // publish a message to a topic
  client.publish('hello/world', 'my message', function() {
    console.log("Message is published");
    client.end(); // Close the connection when published
  });
});