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
            <Collapsible label="description" >
                
                 <p>
                    The collapsible component puts long sections of the information under a
                    block enabling users to expand or collapse to access its details.
                    The collapsible component puts long sections of the information under a
                    block enabling users to expand or collapse to access its details.
                    The collapsible component puts long sections of the information under a
                    block enabling users to expand or collapse to access its details.
                </p>
            </Collapsible>
            <Collapsible label="Equipements" >
                
                 <p>
                    The collapsible component puts long sections of the information under a
                    block enabling users to expand or collapse to access its details.
                </p>
            </Collapsible>
            </div>
            <Footer />
        
      </>
    )
}


export default FicheLogement;
