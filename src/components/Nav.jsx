import React from 'react';
import { Link } from "react-router-dom";

function Nav(){
    const navLinkStyle = {
        color: '#E2DED0',
        textDecoration: 'none',
    };

    return (
        <div className="nav-div">
            <ul className="nav-list">
            <li><Link to="/" style={navLinkStyle}>About</Link></li> 
            <li><Link to="/portfolio" style={navLinkStyle}>Portfolio</Link></li> 
            <li><Link to="/contact" style={navLinkStyle}>Contact</Link></li> 
            <li><Link to="/resume" style={navLinkStyle}>Resume</Link></li> 
            </ul>
        </div>
    )
}


export default Nav;