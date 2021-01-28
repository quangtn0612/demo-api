import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="">Solution</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/product">Product</NavLink>
                </div>
            </div>
        </nav>
    </div>
}
export default NavBar