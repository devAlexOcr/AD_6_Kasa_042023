import Collapsible from './Collapsible.jsx'

import './collapse.scss'

function Collapse ({id, description, equipements}) {
    
    return (

    <div id="collapse_logement">
        <Collapsible key={id} label="Description" height='180px'>
            <p>{description}</p>    
        </Collapsible>    
 
        <Collapsible key={id+1} label="Equipements" height='180px'>
            <ul>
                {equipements.map((equip, i) =>
                <li key={i}>{equip}</li>
                )}  
            </ul>
        </Collapsible> 
    </div>
    )
}

export default Collapse