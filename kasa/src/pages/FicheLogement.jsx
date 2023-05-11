import React from 'react'
import Banniere from '../components/Home/Banniere'
import '../pages/fiche.css'
import Nom from '../components/Fiche_Logement/nom'
import Proprietaire from '../components/Fiche_Logement/proprietaire'
import Tag from '../components/Fiche_Logement/Tag'
import Stars from '../components/Fiche_Logement/Stars'
import Collapsible from '../components/Fiche_Logement/Collapsible'
import Footer from '../components/Footer'
import { Logements} from "../data/Appartements.js"




function FicheLogement() {
    return (
      <>
        <Banniere />
        <div id='presentation'>
            <div id='gauche'>
                <Nom />
                <div id='tags'>                        
                    <Tag />     
                    <Tag />
                    <Tag />                                   
                </div>
            </div>

            <div id='droite'>
                <Proprietaire />                               
                <Stars />
            </div>
        </div>

        <div id="collapse">

                <Collapsible key={Logements.id} label="Description">
                    <p>{Logements.description}</p>    
                </Collapsible>    
                <Collapsible key={Logements.id} label="Equipements">
                    <p>{Logements.description}</p>    
                </Collapsible> 
        </div>

        <Footer />        
      </>
    )
}

export default FicheLogement;
