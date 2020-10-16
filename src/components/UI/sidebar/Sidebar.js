import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../utility/logo/Logo'
const Sidebar = () => {
    return (< div className='Sidebar' >
        <Logo />
        <ul>
            <li><NavLink to="/"  exact>Blood Receiving</NavLink></li>
            <li><NavLink to="/donate" exact>Blood Donations</NavLink></li>
            <li ><NavLink to="/profile"exact>Profile</NavLink></li>
            <li ><NavLink to="/why" exact>About</NavLink></li>
            <li ><NavLink to="/Question">FAQ</NavLink></li>
        </ul>
    </div >)
}


export default Sidebar