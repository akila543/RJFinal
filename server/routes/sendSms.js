const sms = require('express').Router()
    , request = require('superagent')
    , fs     = require('fs')
    , bodyParser = require('body-parser');
const accountSid = require('./../config.js').accountSid;
const authToken = require('./../config.js').authToken;




const client = require('twilio')(accountSid, authToken);

var bodyparser=require('body-parser').json();

sms.use(bodyParser.urlencoded({ extended: true }));

sms.post('/sendSms',bodyparser, (req, res) => {
  var file= req.body.file_dir;
      client.messages
        .create({
           body: `Thanks for visting the RJ Reynolds Booth @ Orals Event\n
           We are excited to give you a Coupon \n ${file}` ,
           from: '+12563056486',
           to: '+919113046785'
         })
        .then(message => console.log(message.sid));

  res.send("Sms sent Successfully");
});

module.exports = sms;
