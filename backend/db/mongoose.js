const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+process.env.DATABASE_CONNECTION_URL+'/'+process.env.DATABASE_NAME, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

module.exports = {
    mongoose
};