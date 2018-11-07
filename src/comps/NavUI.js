import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'


class NavUI extends React.Component {
    
  
  getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    
    
    
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Charkzone</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                           <li className={this.getNavLinkClass("/chatbot")}><NavLink to="/Chatbot">Contacto</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};
NavUI = withRouter(NavUI);
export default NavUI;