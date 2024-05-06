import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        
        <div className="top-bar">  
            <nav className="navbar navbar-custom sticky-top navbar-expand-lg justify-content-between">
                <a className="nav-item nav-link active" href="#">home</a>
                <a className="nav-item nav-link" href="#">projects</a>
                <a className="nav-item nav-link" href="#">contact</a>
            </nav>
        </div>
        
    );
}

export default NavBar;