import  {Link, useLocation} from 'react-router-dom'

import './nav.scss'

function Nav() {

    const location = useLocation()

    return (
        <nav>
            <Link to="/" className={location.pathname === '/' ? "underline" : ""}>Accueil</Link>
            <Link to="Apropos" className={location.pathname === '/Apropos' ? "underline" : ""}>A Propos</Link>
        </nav>
    )
}


export default Nav