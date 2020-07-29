import React from 'react';
import './App.scss';
import Form from "../../components/Form"
import Basket from "../../components/Basket"
import {Link} from "react-router-dom"

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <h1 className="general-title">Checkout</h1>

        <div className="container">
        <Form />
        <Basket />
        </div>
      <Link to="/">
        <p className="link-carrousel">Volver a Carrousel</p>
      </Link>
      </div>
    )
  }
} 

export default App;
