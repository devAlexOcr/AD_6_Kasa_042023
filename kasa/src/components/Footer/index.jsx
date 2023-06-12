import logo from '../../assets/logo/logo_footer.png'

import './footer.scss'

function Footer() {
    return (
       <div id='footer'>
            <img src={logo} alt='logo blanc' />     
            
            <p>
            <i className="fa-regular fa-copyright"></i> 2020 Kasa, All rights reserved
            </p>
       </div>
    )
}

export default Footer