import React from 'react';
import DimonLogo from "../../static/DimonLogo.png";
import './Header.css';


const Header = () => {
    return (
    <header className="header">
        <img src={DimonLogo} alt="Dimonchik Logo"/>
    </header>
    )
};

export default Header;
