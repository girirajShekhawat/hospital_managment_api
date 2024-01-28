const dotenv=require('dotenv')
dotenv.config();
const express=require('express');
 
const app=express();

 
const port=process.env.PORT ||8000;
// used database
const db = require('./db/index.js')


//Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport.js')


app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: 'application/json' }))
app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))



    app.listen(port, function (error) {
        if (error) {
            console.log(`Error in running the Server. Error is : ${error}`);
            return;
        }
        console.log(`Server is up and running on the port: ${port}`);
    })
