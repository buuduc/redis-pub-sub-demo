var redis = require('redis');

var sub = redis.createClient();
sub.subscribe("latest");
sub.on("message", function (channel, message) {
    console.log("subscriber:", message);
});
