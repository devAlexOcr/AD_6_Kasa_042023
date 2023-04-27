import React from 'react'
import  {Link} from 'react-router-dom'
import Nav from './nav_link'
import Logo from './logo'
import './header.css'



function Header() {
    return (
        <header>
        <>
        <Logo />
        <Nav />
        </>
        </header>
    )
}


export default Header