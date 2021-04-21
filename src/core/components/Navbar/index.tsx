import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row main-nav">
        <div className="col-12">
            <Link to="/" className="nav-logo-text">
                <p>Bootcamp DevSuperior</p>
            </Link>
        </div>
    </nav>
)

export default Navbar;