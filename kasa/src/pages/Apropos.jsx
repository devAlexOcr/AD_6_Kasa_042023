import React from "react";
import Collapsible from '../components/Fiche_Logement/Collapsible'
import { Collapse } from '../data/Collapse'
import Banniere from "../components/Home/Banniere"
import Footer from "../components/Footer";

function Apropos() {
    return (
    <>
        <Banniere />
        <div className="App">
            {
                Collapse.map(col =>
                <Collapsible key={col.id} label={col.title}>
                <p>{col.description}</p>    
                </Collapsible>                
                )
                
            }
        </div>
        <Footer />
    </>
    )
}

export default Apropos;