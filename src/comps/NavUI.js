import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom'
import '../Nav.css'

class NavUI extends React.Component {


    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {

        const loginReqLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
            </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                </a>
                </li>
            </ul>
        )

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample10"
                    aria-controls="navbarsExample10"
                    aria-expanded="false"
                    aria-labe="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbarsExample10"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
        </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginReqLink}
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className={this.getNavLinkClass("/chatbot")}><NavLink to="/Chatbot">Contacto</NavLink></li>
                    </ul>
                </div>
            </nav>

        )
    }
};
NavUI = withRouter(NavUI);
export default NavUI;