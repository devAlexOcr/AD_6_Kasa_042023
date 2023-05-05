import React from 'react'
import './footer.css'
import logo from './logo.png'


function Footer() {
    return (
       <div id='footer'>
            <img src={logo} alt='logo blanc' />     
            
            <p>
            <i class="fa-regular fa-copyright"></i> 2020 Kasa, All rights reserved
            </p>
       </div>
    )
}

export default Footer