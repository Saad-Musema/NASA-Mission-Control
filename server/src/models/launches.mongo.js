const mongoose = require('mongoose');
//Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, { useNewUrlParser: true });
//  //Get the default connection
// var db = mongoose.connection;

const launchesSchema = new mongoose.Schema({
    flightNumber : {
        type: Number,
        required: true
    },
    launchDate : {
        type: Date,
        required: true
    },
    
    mission : {
        type:String,
        required: true
    },
    rocket : {
        type:String,
        required: true
    },
    customers : [ String ],
    target : {
        type: String,
        rquired: true
    },
    upcominig: {
        type :Boolean,
        required: true
    },
    sucess : {
        type: Boolean,
        required: true,
        default: true
    }

})


module.exports = mongoose.model('Launch', launchesSchema)