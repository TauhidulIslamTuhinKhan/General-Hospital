import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import logo from '../images/brandLogo.png'
import './Header.css'

const Header = () => {
    const {user, signout} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect  expand="lg">
                <Container>
                <NavLink to="/home"><img className="logo-img" src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                     <NavLink className="header-text" to="/home" activeStyle={{ fontWeight: "bold", color: "red" }}> Home </NavLink>      
                     <NavLink className="header-text" to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}> About </NavLink>      
                     <NavLink className="header-text" to="/services" activeStyle={{ fontWeight: "bold", color: "red" }}>Services </NavLink>      
                     <NavLink className="header-text" to="/doctors" activeStyle={{ fontWeight: "bold", color: "red" }}> Doctors </NavLink>  
                     <span> {user.displayName} </span>     
                     {!user?.email ? <> <NavLink className="header-text" to="/signup" activeStyle={{ fontWeight: "bold", color: "red" }}> Sign up </NavLink>      
                     <NavLink className="header-text" to="/signin" activeStyle={{ fontWeight: "bold", color: "red" }}> Sign in </NavLink>  </>  
                      :
                     (<button onClick={signout} className="btn btn-danger">Sign out</button>) }  
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;