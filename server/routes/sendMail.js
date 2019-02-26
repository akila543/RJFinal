'use strict';
const nodemailer = require('nodemailer');
const EventEmitter = require('events');

const mailEmitter = new EventEmitter();
var res;
// // Mail sender configuration and details
let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
        user: 'rapidprototypesolutions@gmail.com',
        pass: 'Rapid@123'
    }
});


mailEmitter.on('sendmail',data=>{
    // setup email data with unicode symbols
    console.log("data ", data);
    let mailOptions = {
        from: "rapidprototypesolutions@gmail.com" , // sender address
        to: data.to,
        subject: data.subject, // Subject line
        text: data.text, // plain text body
        html: data.html, // html body
        attachments:data.attachments
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      console.log("error ",error, "info", info);
        if (error) {
          res = "error";
          //callback(res);
          // return "error";
        }
        else{
        console.log('Message sent: %s', JSON.stringify(info));
        res = "success";
        //callback(res);
        // return "success";
        }
         //response.send(200);

    });
});

let send = (options,callback)=>{

    mailEmitter.emit('sendmail',options,callback)
};

// }
module.exports = {send};
