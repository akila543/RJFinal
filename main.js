import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Login from './client/Login.jsx';
import CustomerInformation from './client/customerInformation.jsx';
import DisplayMessage from './client/DisplayMessage.jsx';
import CustomerForm from './client/CustomerForm.jsx';
import LoginForm from './client/LoginForm.jsx';
ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/displayMessage' component={DisplayMessage} />
      <Route exact path='/customerForm' component={CustomerForm} />

    </div>
  </HashRouter>,
  document.getElementById('app'));
