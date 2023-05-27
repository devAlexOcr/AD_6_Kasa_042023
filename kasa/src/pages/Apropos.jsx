import { useState, useEffect } from "react";

import Banniere from "../components/Home/Banniere"
import  SrcBg from "../assets/images/background_apropos.png"

import Collapsible from '../components/Fiche_Logement/Collapse/Collapsible'

function Apropos() {

    const [Collapse, setCollapse] = useState([])

    useEffect (() => {
        fetch('data/Collapse.json',
        {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data) {
            setCollapse(data)
        })
    }, [])

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