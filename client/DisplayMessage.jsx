import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Icon, Header, Image, Dropdown, Radio, Button, Form, Input, TextArea, Select, Modal  } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const URL = require('./dev.js').URL;
const styles = {
  paper:{
    paddingTop:"50px",
    paddingBottom:"50px",
    paddingLeft:"150px"
  }
};
class displayMessage extends React.Component {
   constructor(props){
     super(props);
     this.state ={
        }
}

render() {

return (
           <div style={{height:window.innerHeight,width:window.innerWidth,backgroundColor:'#aa2525',float:'left',paddingBottom:"-280px"}}>
           <br/>

           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>


            <Image style={{paddingLeft:'300px',paddingBottom:"-280px",float:'left'}}src='./images/Card1.JPG' size='Small' />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
             <Button style={{marginLeft:"380px",border:"1px solid black",fontSize:'20px'}} as={Link} to='/'>Click Here to go Home Page</Button>
            </div>

           </div>



      );
   }
}
export default displayMessage;
