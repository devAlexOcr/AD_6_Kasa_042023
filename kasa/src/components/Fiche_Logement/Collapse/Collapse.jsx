import Collapsible from './Collapsible.jsx'

function Collapse ({id, description, equipements}) {
    
    return (

    <div id="collapse_logement">
        <Collapsible key={id} label="Description">
            <p>{description}</p>    
        </Collapsible>    
 
        <Collapsible key={id+1} label="Equipements" >
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