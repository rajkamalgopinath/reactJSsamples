import React, { Component }  from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse, Jumbotron } from 'reactstrap';

class Header extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Todo</h1>
                                <h2>A simple Todo App</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <Nav  navbar>
                        <NavItem>
                                <NavLink className="nav-link" href="/home">
                                    Home
                                </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink className="nav-link" href="/todoAdd">
                                        Todo Add
                                </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink className="nav-link" href="/todo">
                                        Todo
                                </NavLink>
                        </NavItem>
                        <NavItem>
                               <NavLink className="nav-link" href="/aboutus">
                                    About
                              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/contactus">
                                            Contact Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/login">
                                            Login
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;