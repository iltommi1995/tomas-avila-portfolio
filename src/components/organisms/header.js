import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                Tomàs Avila
            </div>
            <div className="header-nav">
                <Link className="nav-link" to="/">Who i am</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/hobbies">Hobbies</Link>
            </div>
        </div>
    )
}