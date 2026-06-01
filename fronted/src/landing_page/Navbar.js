import React from 'react';
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Institution Logo</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}