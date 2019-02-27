import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import request from 'superagent';
import { Grid, Icon, Header, Image, Dropdown, Radio, Button, Form, Input, TextArea, Select, Modal  } from 'semantic-ui-react';

const URL = require('./dev.js').URL;
const stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' } ,
                      { key: 'AK', value: 'AK', text: 'Alaska' },
                      {key: 'AS', value: 'AS', text: 'American Samoa'},
                      {key:'AZ',value:'AZ',text:'Arizona'},
                      {key:'AR',value:'AR',text:'Arkansas'},
                      {key:'CA',value:'CA',text:'California'},
                      {key:'CO',value:'CO',text:'Colorado'},
                      {key:'CT',value:'CT',text:'Connecticut'},
                      {key:'DE',value:'DE',text:'Delaware'},
                      {key:'DC',value:'DC',text:'District Of Columbia'},
                      {key:'FM',value:'FM',text:'Federated States Of Micronesia'},
                      {key:'FL',value:'FL',text:'Florida'},
                      {key:'GA',value:'GA',text:'Georgia'},
                      {key:'GU',value:'GU',text:'Guam'},
                      {key:'HI',value:'HI',text:'Hawaii'},
                      {key:'ID',value:'ID',text:'Idaho'},
                      {key:'IL',value:'IL',text:'Illinois'},
                      {key:'IN',value:'IN',text:'Indiana'},
                      {key:'IA',value:'IA',text:'Iowa'},
                      {key:'KS',value:'KS',text:'Kansas'},
                      {key:'KY',value:'KY',text:'Kentucky'},
                      {key:'LA',value:'LA',text:'Louisiana'},
                      {key:'ME',value:'ME',text:'Maine'},
                      {key:'MH',value:'MH',text:'Marshall Islands'},
                      {key:'MD',value:'MD',text:'Maryland'},
                      {key:'MA',value:'MA',text:'Massachusetts'},
                      {key:'MI',value:'MI',text:'Michigan'},
                      {key:'MN',value:'MN',text:'Minnesota'},
                      {key:'MS',value:'MS',text:'Mississippi'},
                      {key:'MO',value:'MO',text:'Missouri'},
                      {key:'MT',value:'MT',text:'Montana'},
                      {key:'NE',value:'NE',text:'Nebraska'},
                      {key:'NV',value:'NV',text:'Nevada'},
                      {key:'NH',value:'NH',text:'New Hampshire'},
                      {key:'NJ',value:'NJ',text:'New Jersey'},
                      {key:'NM',value:'NM',text:'New Mexico'},
                      {key:'NY',value:'NY',text:'New York'},
                      {key:'NC',value:'NC',text:'North Carolina'},
                      {key:'ND',value:'ND',text:'North Dakota'},
                      {key:'MP',value:'MP',text:'Northern Mariana Islands'},
                      {key:'OH',value:'OH',text:'Ohio'},
                      {key:'OK',value:'OK',text:'Oklahoma'},
                      {key:'OR',value:'OR',text:'Oregon'},
                      {key:'PW',value:'PW',text:'Palau'},
                      {key:'PA',value:'PA',text:'Pennsylvania'},
                      {key:'PR',value:'PR',text:'Puerto Rico'},
                      {key:'RI',value:'RI',text:'Rhode Island'},
                      {key:'SC',value:'SC',text:'South Carolina'},
                      {key:'SD',value:'SD',text:'South Dakota'},
                      {key:'TN',value:'TN',text:'Tennessee'},
                      {key:'TX',value:'TX',text:'Texas'},
                      {key:'UT',value:'UT',text:'Utah'},
                      {key:'VT',value:'VT',text:'Vermont'},
                      {key:'VI',value:'VI',text:'Virgin Islands'},
                      {key:'VA',value:'VA',text:'Virginia'},
                      {key:'WA',value:'WA',text:'Washington'},
                      {key:'WV',value:'WV',text:'West Virginia'},
                      {key:'WI',value:'WI',text:'Wisconsin'},
                      {key:'WY',value:'WY',text:'Wyoming'}
                    ];
 const genderOptions = [ { key: 'Male', value: 'Male', text: 'Male' } ,
                        { key: 'Female', value: 'Female', text: 'Female' }      ];
class customerForm extends React.Component {
   constructor(props){
     super(props);
     this.state ={
       firstname:'',
       lastname:'',
       email:'',
       phone_no:'',
       modalOpen:false
     }
this.handleEmailChange=this.handleEmailChange.bind(this);
this.handlePhoneNo=this.handlePhoneNo.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
this.handleLastName=this.handleLastName.bind(this);
this.handleFirstName=this.handleFirstName.bind(this);
this.sendMail = this.sendMail.bind(this);
}
handleEmailChange(e){
  this.setState({
    email:e.target.value
  })
}
handlePhoneNo(e){
  this.setState({
    phone_no:e.target.value
  })
}
handleFirstName(e){
this.setState({
  firstname:e.target.value
})
}
handleLastName(e){
  this.setState({
    lastname:e.target.value
  })
}
handleSubmit(){
  console.log("submit clicked");
if(this.state.firstname =='' || this.state.lastname=='' || this.state.phone_no=='' || this.state.email==''){
this.setState({
  modalOpen:true
})
}
else{
  var items = ["https://s3.ap-south-1.amazonaws.com/twilio543/Camel.JPG",
  "https://s3.ap-south-1.amazonaws.com/twilio543/MarlboroEdited.JPG",
  "https://s3.ap-south-1.amazonaws.com/twilio543/NewportEdited.JPG",
  "https://s3.ap-south-1.amazonaws.com/twilio543/PyramidEdited.JPG"];
   var file=items[Math.floor(Math.random()*items.length)];
  console.log(file,"items====>");
  this.sendMail(file);
  this.sendSms(file);
  window.location = "http://ec2-13-232-44-245.ap-south-1.compute.amazonaws.com:3001/#/displayMessage"

}
}

sendMail(dir){
  console.log("dir!!!! ",dir);
  const req = request.post(URL+'/sendMail');
  req.send({name:this.state.firstname, email: this.state.email, phoneNo:this.state.phone_no,file_dir:dir });
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

       <div style={{backgroundColor:'#000',height:window.innerHeight,width:window.innerWidth}}>
          <div style={{height:window.innerHeight,width:window.innerWidth/4,backgroundColor:'#aa2525',float:'left'}}>
            <Image style={{marginTop:"320px",marginLeft:'40px'}} src='./images/logo1.JPG' size='Small' />
          </div>
          <div style={{height:window.innerHeight,width:(window.innerWidth/4)*4,backgroundColor:'#fff'}}>
            <Grid style={{paddingTop:"50px"}}>
            <Grid.Row>
            <Grid.Column width={1}/>
            <Grid.Column width={14}>
              <Header as='h2' style={{letterSpacing:'1px',color:'#aa2525'}}>CUSTOMER INFORMATION</Header>
            </Grid.Column>
            <Grid.Column width={1}/>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={7}>
            <Form>
              <Form.Field >
               <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>First Name *</label>
               <input style={{border:'1px solid #aa2525'}} onChange={this.handleFirstName}placeholder='First Name' required/>
             </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={7}>
            <Form>
              <Form.Field >
               <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Middle Name</label>
               <input style={{border:'1px solid #aa2525'}} placeholder='Middle Name' />
             </Form.Field>
            </Form>
          </Grid.Column>

        </Grid.Row>


        <Grid.Row>
        <Grid.Column width={1}/>
        <Grid.Column width={7}>
          <Form>
            <Form.Field >
             <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Last Name *</label>
             <input style={{border:'1px solid #aa2525'}} onChange={this.handleLastName} placeholder='Last Name' />
           </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={7}>
          <Form>
            <Form.Field >
             <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Prefered Name</label>
             <input style={{border:'1px solid #aa2525'}} placeholder='Prefered Name' />
           </Form.Field>
          </Form>
        </Grid.Column>

      </Grid.Row>
      <Grid.Row>
      <Grid.Column width={1}/>
      <Grid.Column width={4}>
        <Form>
          <Form.Field >
           <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>DOB</label>
           <input style={{border:'1px solid #aa2525'}} control='input' type='date' />
         </Form.Field>
        </Form>
      </Grid.Column>
      <Grid.Column width={10}>
        <Form>
          <Form.Field >
           <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Street Address</label>
           <input style={{border:'1px solid #aa2525'}} placeholder='Street/Address' />
         </Form.Field>
        </Form>
      </Grid.Column>

    </Grid.Row>
    <Grid.Row>
    <Grid.Column width={1}/>
    <Grid.Column width={3}>
    <Form>
      <Form.Field >
       <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>APT/SUITE #</label>
       <input style={{border:'1px solid #aa2525'}} placeholder='APT/SUITE #' />
     </Form.Field>
    </Form>
    </Grid.Column>
    <Grid.Column width={3}>
    <Form>
      <Form.Field >
       <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>ZIP</label>
       <input style={{border:'1px solid #aa2525'}} placeholder='ZIP' />
     </Form.Field>
    </Form>
    </Grid.Column>
    <Grid.Column width={3}>
    <Form>
      <Form.Field >
       <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>City</label>
       <input style={{border:'1px solid #aa2525'}} placeholder='City' />
     </Form.Field>
    </Form>
    </Grid.Column>
    <Grid.Column width={3}>
    <Form>
      <Form.Field >
       <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>State</label>
      <Form.Input style={{border:'1px solid #aa2525'}} placeholder='State' control={Select} options={stateOptions} width={4} />
     </Form.Field>
    </Form>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row>
  <Grid.Column width={1}/>
  <Grid.Column width={5}>
  <Form>
    <Form.Field >
     <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Gender</label>
    <Form.Input style={{border:'1px solid #aa2525'}} placeholder='State' control={Select} options={genderOptions} width={5}  />
   </Form.Field>
  </Form>
  </Grid.Column>
 <Grid.Column width={8}>
   <Form>
     <Form.Field >
      <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Expiry</label>
      <input style={{border:'1px solid #aa2525'}} control='input' type='date' />
    </Form.Field>
   </Form>
 </Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width={1}/>
<Grid.Column width={7}>
<Form>
  <Form.Field >
   <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Email *</label>
   <Form.Input style={{border:'1px solid #aa2525'}} onChange={this.handleEmailChange} value={this.state.email} required placeholder='Email Address' control='input' type='email'  />
 </Form.Field>
</Form>
</Grid.Column>
<Grid.Column width={7}>
<Form>
  <Form.Field >
   <label style={{color:"#aa2525",fontSize:"20px",paddingBottom:"8px"}}>Phone No*</label>
   <Form.Input style={{border:'1px solid #aa2525'}} onChange={this.handlePhoneNo} value={this.state.phone_no} required placeholder='Phone No' control='input' type='number'  />
 </Form.Field>
</Form>
</Grid.Column>
</Grid.Row>
<Grid.Row>
<Grid.Column width={12}/>
<Grid.Column width={4}>
 <Button style={{backgroundColor:'#cc3b3b',border:'1px solid black',fontSize:'20px'}}onClick={this.handleSubmit}>Submit</Button>
</Grid.Column>

</Grid.Row>


            </Grid>
          </div>
          <Modal size="mini" open={this.state.modalOpen}>
         <Modal.Header>Please fill First name, Last Name, Email and Phone Number</Modal.Header>
         <Modal.Actions>
           <Button onClick={()=>this.setState({modalOpen:false})}positive icon='checkmark' labelPosition='right' content='OK' />
         </Modal.Actions>
       </Modal>
       </div>
      );
   }
}



export default customerForm;
