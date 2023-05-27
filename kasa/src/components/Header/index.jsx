import logo from '../../assets/logo/logo_header.png'
import Nav from './nav_link'


function Header() {
    return (
        <header>
        <img src={logo} alt="logo couleur" />
        <Nav />      
        </header>
    )
}


export default Header