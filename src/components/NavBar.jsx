import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        
        <div className="top-bar">  
            <nav className="navbar navbar-custom sticky-top navbar-expand-lg justify-content-between">
                <NavLink to="/#home" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/#projects" className="nav-item nav-link">Projects</NavLink>
                <NavLink to="/#contact" className="nav-item nav-link">Contact</NavLink>
            </nav>
        </div>
        
    );
}

export default NavBar;