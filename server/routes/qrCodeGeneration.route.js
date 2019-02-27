const qrCode = require('express').Router()
    , request = require('superagent')
    , qrcode  = require('qrcode')
    , fs     = require('fs')
    , bodyParser = require('body-parser')
    , sendMail = require('./sendMail.js');

var bodyparser=require('body-parser').json();

qrCode.use(bodyParser.urlencoded({ extended: true }));


// qrCode.post('/customerData',bodyparser, (req, res) => {
//
//   var customerDetails = req.body;
//   //console.log('CustomerDetails =========>',customerDetails);
//
//   run().catch(error => console.error(error.stack));
//
//   async function run() {
//     var name= req.body.name;
//     var emailId = req.body.email;
//     var phoneNo = req.body.phoneNo;
//     const url = await qrcode.toDataURL(` Name:${name} \n  EmailId:${emailId}    \n  PhoneNo:${phoneNo}  `);
//
//     let baseimage = url.split(';base64,').pop();
//
//     let qrCode = "./uploads/"+name+"_"+Date.now()+".png";
//     let dir = __dirname+"\\uploads\\"+name+"_"+Date.now()+".png";
//     console.log("qrcode!!!!!!!!!!!! ", dir);
//
//     fs.writeFile(dir, baseimage, {encoding: 'base64'}, function(err) {
//       console.log('File created');
//     });
//   res.json({
//     status:"success",
//     file:dir
//   })
//
// }
//
// });
qrCode.post('/sendMail',bodyparser, (req, res) => {
  console.log("data ",req.body);
  let url = req.body.file_dir;
  console.log("url ",url);
  sendMail.send({
  	to:req.body.email,
  	subject:'RJ Reynolds',
    html:'<center><h1>Hi '+req.body.name +'!!!!! Thanks for visting the R.J REYNOLDS Booth @ Orals Event</h1>'+
    '<br><h3>Here is the Coupon for your next purchase.</h3><br>'+
    '<br><img src="cid:unique@kreata.ee"/><br></center><p</p><br>',
    attachments: [{
      // filename: 'Tarun.png',
      path: url,
      cid: 'unique@kreata.ee',
      contents: new Buffer(url, 'base64')
    }]
  });
  res.send("Success");
});

module.exports = qrCode;
