import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo_header.png'
import Nav from './nav_link'


function Header() {
    return (
        <header>
        <Link to='/'>
        <img src={logo} alt="logo couleur" />
        </Link>
        <Nav />      
        </header>
    )
}


export default Header