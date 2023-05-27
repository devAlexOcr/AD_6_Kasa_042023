import { useParams } from 'react-router-dom';

import Collapsible from './Collapsible.jsx'
import { Logements } from "../../../data/Logements"

function Collapse () {

    const Params = useParams()
    const logement = Logements.find((Logements) => Logements.id === Params.id);
    return (
    <div id="collapse">
        <Collapsible key={logement.id} label="Description">
            <p>{logement.description}</p>    
        </Collapsible>    
 
        <Collapsible key={logement.id+1} label="Equipements" >
            <ul>
                {logement.equipments.map((equip, i) =>
                <li key={i}>{equip}</li>
                )}  
            </ul>
        </Collapsible> 
    </div>
    )
}

export default Collapse