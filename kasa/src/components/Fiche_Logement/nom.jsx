import React from "react";
import './nom.css'

function Nom({title, localisation}) {
    return (
       <div id='nom'>
            <h1>{title}</h1>
            <p>{localisation}</p>       
       </div>
    )
}

export default Nom