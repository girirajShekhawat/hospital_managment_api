const express = require('express');
const router = express.Router();
const passport = require('passport');

const status= require('../controllers/report.js')
// doctors routes...
router.use('/doctors', require('./docter.js'));

// Patients routes...
router.use('/patients', require('./patient.js'));


// report status of patient is authorized by jwt
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),status.filteredReports)


module.exports = router;