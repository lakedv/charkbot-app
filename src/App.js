// react-bot/src/App.js
import './App.css'

import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'

//Component Imports >>

import NavUI from './comps/NavUI';
import Chatbot from './comps/Chatbot'
import Login from './comps/Login'
import Register from './comps/Register'
import AddProdc from './comps/AddProdc'

  class App extends Component {
  

    render() {
     
      return (
      <div>
        <BrowserRouter>
          <div>
            <NavUI />
            <Route path="/chatbot" component={Chatbot} />
            <Route exath path="/register" component={Register} />
            <Route exath path="/addprodc" component={AddProdc}/>
            <Route exath path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
      
      );
    }
  }


export default App;