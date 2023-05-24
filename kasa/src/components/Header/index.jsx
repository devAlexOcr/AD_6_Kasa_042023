import React from 'react'
import Nav from './nav_link'
import logo from '../../assets/logo/logo_header.png'



function Header() {
    return (
        <header>
        <img src={logo} alt="logo couleur" />
        <Nav />      
        </header>
    )
}


export default Header