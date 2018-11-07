import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class NavUI extends Component {

  render() {

    return (
    <div className='Navbar'>
<Navbar className="Navbar" right brand=''>
  <NavItem href='/inicio'>Home</NavItem>
  <NavItem href='/chatbot'>Bott</NavItem>
</Navbar>
    </div>
    );
  }
}

export default NavUI;