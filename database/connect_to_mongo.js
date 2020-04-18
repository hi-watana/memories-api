var mongoose = require('mongoose');
module.exports = function() {
    const mongoDB = process.env.MONGODB_URI;
    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
        () => 'Connected to DB!').catch(err => {
            console.log('DB connection Error:');
        });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}
