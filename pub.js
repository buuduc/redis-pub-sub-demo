var redis = require("redis");
var pub = redis.createClient();


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
