const mongoose = require('mongoose');

 
 
const url=`${process.env.MONGO_URL}/hospitaldb`
console.log(url)
mongoose.connect(url,{
  serverSelectionTimeoutMS: 10000,
});


const db = mongoose.connection;

// To Check Error 
db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;