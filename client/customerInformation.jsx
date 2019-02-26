import React from 'react';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import request from 'superagent';
const URL = require('./dev.js').URL;

class customerInformation extends React.Component {
   constructor(props){
     super(props);
     this.state ={
          name:'',
          middlename:'',
          lastname:'',
          preferedName:'',
          date:'',
          address:'',
          api_suite:'',
          zip:'',
          city:'',
          stateValue:'',
          gender:'',
          expiry:'',
          email:'',
          phoneNo:'',
          modalOpen: false

     };
     this.handleChangeName= this.handleChangeName.bind(this);
     this.handleChangeLastName=this.handleChangeLastName.bind(this);
     this.handleChangeMiddleName=this.handleChangeMiddleName.bind(this);
     this.handleChangePreferedName=this.handleChangePreferedName.bind(this);
     this.handleDate=this.handleDate.bind(this);
     this.handleAddress=this.handleAddress.bind(this);
     this.handleChangeApiSuite=this.handleChangeApiSuite.bind(this);
     this.handleChangeCity=this.handleChangeCity.bind(this);
     this.handleChangeZip=this.handleChangeZip.bind(this);
     this.handleState=this.handleState.bind(this);
     this.handleGender=this.handleGender.bind(this);
     this.handleExpiry=this.handleExpiry.bind(this);
     this.handleEmail=this.handleEmail.bind(this);
     this.handlePhoneNo=this.handlePhoneNo.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  this.sendMail = this.sendMail.bind(this);
  this.handleClose= this.handleClose.bind(this);
}
handleChangeName(e){
  this.setState({
    name:e.target.value
  })
}
handleChangeMiddleName(e){
  this.setState({
    middlename:e.target.value
  })
}
handleChangeLastName(e){
  this.setState({
    lastname:e.target.value
  })
}
handleChangePreferedName(e){
  this.setState({
    preferedName:e.target.value
  })
}
handleDate(e){
  this.setState({
    date:e.target.value
  })
}
handleAddress(e){
  this.setState({
    address:e.target.value
  })
}
handleChangeApiSuite(e){
  this.setState({
    api_suite:e.target.value
  })
}
handleChangeCity(e){
  this.setState({
    city:e.target.value
  })
}
handleChangeZip(e){
  this.setState({
  zip:e.target.value
  })
}
handleState(e){
  this.setState({
    stateValue:e.target.value
  })
}
handleGender(e){
  this.setState({
    gender:e.target.value
  })
}
handleExpiry(e){
  this.setState({
    expiry:e.target.value
  })
}
handleEmail(e){
  this.setState({
    email:e.target.value
  })
}
handlePhoneNo(e){
  this.setState({
    phoneNo:e.target.value
  })
}
handleClose(){
  this.setState({modalOpen: false})
}
handleSubmit(){
  this.setState({modalOpen: true  })
    // console.log("response from handleSubmit before sending mail=========> ",resp);
      var items = ["https://s3.ap-south-1.amazonaws.com/twilio543/Camel.JPG",
      "https://s3.ap-south-1.amazonaws.com/twilio543/MarlboroEdited.JPG",
      "https://s3.ap-south-1.amazonaws.com/twilio543/NewportEdited.JPG",
      "https://s3.ap-south-1.amazonaws.com/twilio543/PyramidEdited.JPG"];
       var file=items[Math.floor(Math.random()*items.length)];
      console.log(file,"items====>");
    // this.sendMail(file);
    //  this.sendSms(file);


}



sendMail(dir){
  console.log("dir!!!! ",dir);
  const req = request.post(URL+'/sendMail');
  req.send({name:this.state.name, email: this.state.email, phoneNo:this.state.phoneNo,file_dir:dir });
  req.then(resp => {
    console.log("resp ",resp);
    if(resp.text == "Success"){
      console.log("After submit");
       // req.post(URL+'/sendSms');
       // req.then(response => {
       //   console.log(resp.text,"===========Final response");
       // })
     }
  });
}
sendSms(filename){
  console.log("dir!!!! before sending sms ",filename);
  const req = request.post(URL+'/sendSms');
  req.send({file_dir:filename });
  req.then(resp => {
    console.log("response from sendSms function ",resp);

  });
}
render() {

return (
           <div className="customer" >

           <Grid container spacing={24} style={{textAlign:'left',paddingTop:'1%',paddingLeft:"45px"}}>

                 <Grid item xs={12}>
                 <Typography component="h1" variant="display1" style={{marginTop:"10%",color:'black'}}>
                  CUSTOMER INFORMATION
                 </Typography>
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>
                 <TextField  className="customMiddleName" hinttext="" floatinglabeltext="Middle Name"
                  label="Middle Name"
                  style={{width:"90%",marginTop:"10px"}}
                  onChange={this.handleChangeMiddleName}
                  value={this.state.middlename}>
                </TextField>

                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>

                  <TextField  className="customMiddleName" hinttext="" floatinglabeltext="Middle Name"
                   label="Middle Name"
                   style={{width:"90%",marginTop:"10px"}}
                   onChange={this.handleChangeMiddleName}
                   value={this.state.middlename}>
                 </TextField>

                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>

                  <TextField className="customLastName" hinttext="Last Name" floatinglabeltext="Last Name"
                   label="Last Name"
                   style={{width:"90%",marginTop:"10px"}}
                   onChange={this.handleChangeLastName}
                   value={this.state.lastname}>
                 </TextField>

                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>

                  <TextField className="customPreferedName" hinttext="Prefered Name" floatinglabeltext="Prefered Name"
                   label="Prefered Name"
                   style={{width:"90%",marginTop:"10px"}}
                   value={this.state.preferedName}
                   onChange={this.handleChangePreferedName}>
                 </TextField>

                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>
                 <TextField className="customDOB" id="date"
                   label="Date Of Birth"
                   type="date"
                   defaultValue="2000-05-24"
                   onChange={this.handleDate}
                    fullwidth="true" style={{width:"80%",margiBottom:"5px",marginTop:"5px"}}>
        n          </TextField>
                 </Grid>
                 <Grid item xs={8} style={{textAlign:'left'}}>
                 <TextField className="customStreet" hinttext="Street Address" floatinglabeltext="Street Address" multiline={true} rows={1} label="Street Address"
                 style={{
                  width:"100%",margiBottom:"5px",marginTop:"5px"
                    }}
                    onChange={this.handleAddress}
                    />
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>

                  <TextField  className="customApi" hinttext="API_SUITE" floatinglabeltext="API/SUITE"
                   label="API_SUITE"
                   style={{  width:"100%",margiLeft:"50px",marginTop:"5px"}}
                   value={this.state.api_suite}
                   onChange={this.handleChangeApiSuite}>
                 </TextField>
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>

                  <TextField  className="customZip"hinttext="ZIP" floatinglabeltext="ZIP"
                   label="ZIP"
                   style={{ width:"90%",marginTop:"10px"}}
                   value={this.state.zip}
                   onChange={this.handleChangeZip}>
                 </TextField>
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>

                  <TextField className="customCity" hinttext="City" floatinglabeltext="City"
                   label="City"
                   style={{  width:"90%",marginTop:"10px"}}
                   value={this.state.city}
                   onChange={this.handleChangeCity}>
                 </TextField>
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>
                 <FormControl className="customState">
                      <InputLabel htmlFor="age-simple">State</InputLabel>
                      <Select
                       style={{  width:"150px",marginTop:"25px"}}
                        value={this.state.stateValue}
                        onChange={this.handleState}
                        inputProps={{
                          name: 'stateValue',
                          id: 'stateValue',
                        }}
                      >
                        <MenuItem value="Alabama">Alabama</MenuItem>
                        <MenuItem value="Alaska">Alaska</MenuItem>
                        <MenuItem value="Arizona">Arizona</MenuItem>
                        <MenuItem value="Arkansas">Arkansas</MenuItem>
                        <MenuItem value="California">California</MenuItem>
                        <MenuItem value="Colorado">Colorado</MenuItem>
                      </Select>
                    </FormControl>
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>
                 <FormControl className="customGender">
                      <InputLabel htmlFor="age-simple">Gender</InputLabel>
                      <Select
                       style={{  width:"250px",marginTop:"25px"}}
                        value={this.state.gender}
                        onChange={this.handleGender}
                        inputProps={{
                          name: 'gender',
                          id: 'gender',
                        }}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>

                      </Select>
                    </FormControl>
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>
                 <TextField className="customExpiry"id="expiry"
                   label="ID Expiration"
                   type="date"
                   defaultValue="2019-05-24"
                   onChange={this.handleExpiry}
                   style={{width:"80%",marginTop:"10px"}}>
              </TextField>
                 </Grid>
                 <Grid item xs={6} style={{textAlign:'left'}}>
                 <TextField className="customEmail" id="emailId"
                   label="Email Id"
                   floatinglabeltext="Email"
                   onChange={this.handleEmail}
                    value={this.state.email}
                   style={{width:"90%",marginTop:"10px"}}>
               </TextField>
                 </Grid>
                 <Grid item xs={4} style={{textAlign:'left'}}>
                 <TextField className="customPhoneNo"id="PhoneNo"
                   label="Phone No"
                   type="number"
                   floatinglabeltext="Phone No"
                   onChange={this.handlePhoneNo}
                    value={this.state.phoneNo}
                   style={{width:"90%",marginTop:"10px"}}>
              </TextField>
                 </Grid>

           </Grid>
           <br/>
             <div style={{paddingLeft:'850px',width:"100%"}}>
           <Button variant="contained" color="primary"  component={Link} to='/displayMessage' onClick={this.handleSubmit}>
           <h3>Submit</h3>
           </Button>
           </div>

           </div>

      );
   }
}

const styles = {
  root:{
    fontSize:30
  }
}

export default customerInformation;
