var redis = require("redis");
var pub = redis.createClient();
var sub = pub.duplicate();
sub.subscribe("latest");
sub.on("message", function (channel, message) {
    console.log("subscriber:", message);
});

setInterval(function (input) {
    input = 'dcm'
    console.log('🚀 🚀 file: pub.js:14 🚀 input:', input)
    pub.publish("latest",
        JSON.stringify(
            {
                "msg": input.trim(),  // remove whitespaces and \n
                "time": new Date().toJSON()
            }
        )
    );
}, 1000);
// var redis = require('redis');


