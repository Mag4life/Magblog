import React from 'react'

import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/posts'}>Explore</NavLink></li>
                <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/signup '}>Signup</NavLink></li>
            </ul>
        </header>
    )
}


export default Header