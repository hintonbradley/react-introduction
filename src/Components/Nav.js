import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = function() {
    return (
        <div className="Nav">
            <Link to='/'>
                <p>Home</p>
            </Link>
        </div>
    );
}

export default Nav;