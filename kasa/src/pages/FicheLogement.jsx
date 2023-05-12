import React from 'react'
import Banniere from '../components/Home/Banniere'
import '../pages/fiche.css'
import Nom from '../components/Fiche_Logement/nom'
import Proprietaire from '../components/Fiche_Logement/proprietaire'
import Tag from '../components/Fiche_Logement/Tag'
import Stars from '../components/Fiche_Logement/Stars'
import Collapsible from '../components/Fiche_Logement/Collapsible'
import Footer from '../components/Footer'
import { Logements } from "../data/Appartements.js"

function FicheLogement() {
    return (
      <>
        <Banniere />
        <div id='presentation'>
            <div id='gauche'>
                <Nom />
                <div id='tags'>  
                    {Logements[0].tags.map(tag =>
                    <Tag title={1}>
                       
                    </Tag>
                    )}                                                    
                </div>
            </div>

            <div id='droite'>
                <Proprietaire />                               
                <Stars />
            </div>
        </div>

        <div id="collapse">

                <Collapsible key={Logements[0].id} label="Description">
                    <p>{Logements[0].description}</p>    
                </Collapsible>    
                 
                <Collapsible key={Logements[0].id+1} label="Equipements" >
                    {Logements[0].equipments.map(equip =>
                        <li>{equip}</li>
                        )}  
                </Collapsible> 
                        </div>

        <Footer />        
      </>
    )
}

export default FicheLogement;
