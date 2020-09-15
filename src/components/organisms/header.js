import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./header.css";

export default function Header(props) {
    const [mobileNav, setMobileNav] = useState(props.nome);

    const openMobileNav = function () {
        setMobileNav("mobile-nav-active")
    }
    const closeMobileNav = function () {
        setMobileNav("")
    }

    return (
        <div className="header">
            <div className="header-logo">
                Tomàs Avila
            </div>
            <div className="header-nav">
                <Link className="nav-link" to="/tomas-avila-portfolio">Who i am</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/hobbies">Hobbies</Link>
            </div>
            <div className="toggler-container">
                <div id="mobile-toggler" onClick={openMobileNav}></div>
            </div>
            <div className={"mobile-nav " + mobileNav}>
                <div className="close-nav" onClick={closeMobileNav}></div>
                <div className="mobile-nav-links">
                    <Link className="nav-link" to="/tomas-avila-portfolio">Who i am</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/hobbies">Hobbies</Link>
                </div>
            </div>
        </div>
    )
}