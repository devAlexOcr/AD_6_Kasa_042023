import React from 'react'
import  {Link} from 'react-router-dom'
import Nav from './nav_link'
import './header.css'
import logo from './logo.png'



function Header() {
    return (
        <header>
        <img src={logo} alt="logo couleur" />
        <Nav />      
        </header>
    )
}


export default Header