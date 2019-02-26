const   express = require('express')
      , PORT= process.env.PORT||3001
      , app = express();

const bodyParser = require('body-parser');
var bodyparser=require('body-parser').json();

const qrCode = require('./routes/qrCodeGeneration.route.js');
const sms = require('./routes/sendSms.js');

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

app.use(express.static('./../'));

app.use('/', (req, res, next) => {
  console.log('inside routes');
  next();
}, qrCode,sms);

app.get('/test',(req,res)=>{
  res.send('RJ server is working fine');
})

app.listen(PORT,()=>console.log('server started on', PORT));
