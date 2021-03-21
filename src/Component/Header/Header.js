import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import BootstrapCss from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from './Header.css'


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <h1 className="navbar-brand website-name">Excellent Riders</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav-style navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link className="nav-link active" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link className="nav-link active" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link className="nav-link active" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item ml-4">
                            <Link className="nav-link active login-btn" to="/login">Login</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};
export default Header;