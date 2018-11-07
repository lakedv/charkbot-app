// react-bot/src/App.js
import './App.css'

import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import Chatbot from './comps/Chatbot'
import { BrowserRouter } from 'react-router-dom'
import NavUI from './comps/NavUI';

  class App extends Component {
  

    render() {
     
      return (
      <div>
        <BrowserRouter>
          <div>
            <NavUI />
            <Route path="/chatbot" component={Chatbot} />
          </div>
        </BrowserRouter>
      </div>
      
      );
    }
  }


export default App;