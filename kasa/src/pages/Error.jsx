import React from "react";
import { Link } from "react-router-dom";
import './Error.css'

function Error() {
    return (     
    <div id="Error">
        <p id="code">404</p>
        <p id="description">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
        
    )
}

export default Error;