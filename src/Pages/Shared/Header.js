import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/brandLogo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar  expand="lg">
                <Container>
                <NavLink to="/home"><img className="logo-img" src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                     <NavLink className="header-text" to="/home" activeStyle={{ fontWeight: "bold", color: "red" }}> Home </NavLink>      
                     <NavLink className="header-text" to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}> About </NavLink>      
                     <NavLink className="header-text" to="/services" activeStyle={{ fontWeight: "bold", color: "red" }}>Services </NavLink>      
                     <NavLink className="header-text" to="/doctors" activeStyle={{ fontWeight: "bold", color: "red" }}> Doctors </NavLink>      
                     <NavLink className="header-text" to="/signup" activeStyle={{ fontWeight: "bold", color: "red" }}> Sign up </NavLink>      
                     <NavLink className="header-text" to="/login" activeStyle={{ fontWeight: "bold", color: "red" }}> Log in </NavLink>      
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;