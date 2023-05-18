import React from "react";
import Collapsible from '../components/Fiche_Logement/Collapsible'
import { Collapse } from '../data/Collapse'
import Banniere from "../components/Home/Banniere"
import  SrcBg from "../assets/images/background_apropos.png"
import './apropos.css'

function Apropos() {
    return (
    <>
        <Banniere SrcBg={SrcBg} />
        <div className="App">
            {
                Collapse.map(col =>
                <Collapsible key={col.id} label={col.title}>
                <p>{col.description}</p>    
                </Collapsible>                
                )
                
            }
        </div>
    </>
    )
}

export default Apropos;