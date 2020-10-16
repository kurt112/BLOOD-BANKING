import React from 'react'
import './Hamburger.css'

const Hamburger = props => (
    <div className="HamburgerParent" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default Hamburger;