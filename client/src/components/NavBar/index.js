import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">Google Books</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/search"
                        > Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                        >Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;