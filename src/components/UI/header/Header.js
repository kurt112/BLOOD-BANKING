import React from 'react'
import './Header.css'
import HeaderRight from './header-right/header-right'
import HeaderLeft from './header-left/header-left'


const Header = () => {
    return (
        <header>
            <HeaderLeft />
            <HeaderRight />
        </header>

    )
}

export default Header