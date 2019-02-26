import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Grow from 'material-ui/transitions/Grow';
import SwipeableViews from 'react-swipeable-views';
import Zoom from 'material-ui/transitions/Zoom';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Login from './Login.jsx';
import { Redirect } from 'react-router-dom';
const styles = {
  buttonRoot: {
    height: 180,
    position : 'absolute',
    top: "90px",
    right: "70px",
    zIndex: 1
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: '10px',
    padding : '10px',
    width: '130px',
    fontWeight: "7px",
    borderRadius: "5px"
  }
}

class Home extends React.Component {
   constructor(props){
     super(props);

   }
render() {
return (
        <div>
        <Login/>
        </div>


      );
   }
}
export default Home;
