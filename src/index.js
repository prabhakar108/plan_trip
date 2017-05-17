import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import LoginRegister from "./components/LoginRegister";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
require('./css/styles.css');

render(
    <Router>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </Router>,document.getElementById("app")
);
