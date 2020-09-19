import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./header.scss";

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

            <div className="header-nav">
                <Link className="nav-link" to="/tomas-avila-portfolio">Who i am</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/hobbies">Hobbies</Link>
            </div>
            <div className="toggler-container">
                <img src={process.env.PUBLIC_URL + "/img/menu_icon.png"} id="mobile-toggler" onClick={openMobileNav} />
            </div>
            <div className={"mobile-nav " + mobileNav}>
                <div className="close-nav" onClick={closeMobileNav}>
                    <img src={process.env.PUBLIC_URL + "/img/close_menu_icon.png"} className={(mobileNav === "") ? 'close-nav-closed' : ''} />
                </div>
                <div className="mobile-nav-links">
                    <Link className={(mobileNav === "") ? 'nav-link-mobile' : 'nav-link-mobile nav-link-mobile-open'} to="/tomas-avila-portfolio" onClick={closeMobileNav}>Who i am</Link>
                    <Link className={(mobileNav === "") ? 'nav-link-mobile' : 'nav-link-mobile nav-link-mobile-open'} to="/projects" onClick={closeMobileNav}>Projects</Link>
                    <Link className={(mobileNav === "") ? 'nav-link-mobile' : 'nav-link-mobile nav-link-mobile-open'} to="/hobbies" onClick={closeMobileNav}>Hobbies</Link>
                </div>
            </div>
        </div>
    )
}