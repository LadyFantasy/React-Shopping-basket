import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./pages/App"
import Carrousel from "./pages/carrousel"
import {BrowserRouter as Router, Route} from "react-router-dom" 


ReactDOM.render(
  <Router>
    <Route exact path="/" component={Carrousel} />
    <Route exact path="/checkout" component= {App} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
