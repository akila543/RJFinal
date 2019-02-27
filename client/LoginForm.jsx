import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import request from 'superagent';
import { Grid, Icon, Header, Image, Dropdown, Radio, Button, Form, Input, TextArea, Select, Modal  } from 'semantic-ui-react';

const URL = require('./dev.js').URL;

class LoginForm extends React.Component {
   constructor(props){
     super(props);
     this.state ={

     }

}

render() {

return (

       <div style={{backgroundColor:'#000',height:window.innerHeight,width:window.innerWidth}}>
          <div style={{height:window.innerHeight,width:window.innerWidth/3,backgroundColor:'#aa2525',float:'left'}}>

        <Image style={{marginTop:"320px",marginLeft:'80px'}} src='./images/logo1.JPG' size='Small' />
          </div>
          <div style={{height:window.innerHeight,width:(window.innerWidth/4)*4,backgroundColor:'#ebeef4'}}>
            <Grid style={{paddingTop:"150px"}}>
            <Grid.Row>
            <Grid.Column width={4}/>
            <Grid.Column width={10}>
              <Header as='h1' style={{letterSpacing:'1px',color:'black',color:'#aa2525',paddingLeft:"25px"}}>Ambassador Login</Header>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={10}>
            <Form style={{paddingLeft:"150px",color:'black'}}>
              <Form.Field >
               <input style={{border:'1px solid #aa2525'}} placeholder='UserName' required/>
             </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={1}/>
        <Grid.Column width={10}>
          <Form style={{paddingLeft:"150px",color:'black'}}>
            <Form.Field >
             <input style={{border:'1px solid #aa2525'}} placeholder='Password' type="password" required/>
           </Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column width={6}/>
      <Grid.Column width={5}>
       <Button style={{backgroundColor:'#cc3b3b',border:'1px solid black',fontSize:'20px'}} as={Link} to='/customerForm'>Sign In</Button>
      </Grid.Column>

      </Grid.Row>
      </Grid>




          </div>
       </div>
      );
   }
}



export default LoginForm;
