import React from 'react';

function Footer(){
    const footerLinkStyle = {
        color: '#4E4F50',
        textDecoration: 'none',
        marginRight: '40px',
    };

    return (
        <div className="footer">
            <ul className="footer-link">
        <a href="http://linkedin.com/in/alex-lofton" style={footerLinkStyle}>LinkedIn</a>
        <a href="https://github.com/alexlofton" style={footerLinkStyle}>GitHub</a>
        </ul>

        

        </div>
    )
}


export default Footer;