import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'> Home </NavLink></li>
                <li><NavLink to='/about'> About </NavLink></li>
                <li><NavLink to='/contact'> Contact </NavLink></li>
                <li><NavLink to='/login'> Login </NavLink></li>
                <li><NavLink to='/signup'> Signup </NavLink></li>
                <li><NavLink to='/reviews'> Reviews </NavLink> </li>
                <li><NavLink to='/resources'> Resources </NavLink> </li>
            </ul>
        </nav>
    )
};

export default Navigation;