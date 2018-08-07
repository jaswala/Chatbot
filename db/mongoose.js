var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://@:27017/edw');

mongoose.connect('mongodb://127.0.0.1:27017/meantest', function() { /* dummy function */ })
    .then(() => {
        console.log('connected to mongodb')
    })
    .catch(err => { // mongoose connection error will be handled here
        console.log('failed to connected to mongodb')
    });

module.exports = {mongoose};