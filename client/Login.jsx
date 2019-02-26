import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
const styles = {
  button:{
    width:"100%",
    background: "none",
    border: "2px solid #4caf50",
    color: "white",
    padding: "5px",
    fontsize: "18px",
    cursor: "pointer"
  }
};
class Login extends React.Component {
   constructor(props){
     super(props);
     this.state ={
       value:'',
       password:'',
     };
     this.handleChange = this.handleChange.bind(this);
     this.handlePassword= this.handlePassword.bind(this);
}
handleChange(e){
  this.setState({value: e.target.value})
}
handlePassword(e){
  this.setState({password: e.target.value})
}
render() {

return (
           <div className="login" style={{width:window.innerWidth}}>
           <div className="login-box" >
           <h2>RJ Reynolds Ambassador</h2>
           <div className="textbox">
           <input type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange}/>

           </div>
           <br/>
           <div className="textbox">
           <input type="password" placeholder="Password"  value={this.state.password} onChange={this.handlePassword}/>
           </div>
           <br/>
            <Button style={styles.button} component={Link} to='/customerForm'>Sign In</Button>
           </div>
           </div>

      );
   }
}
export default Login;
