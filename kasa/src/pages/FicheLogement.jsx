import React from 'react'
import Banniere from '../components/Home/Banniere'
import '../components/Fiche_Logement/fiche.css'
import Nom from '../components/Fiche_Logement/nom'
import Proprietaire from '../components/Fiche_Logement/proprietaire'
import Tag from '../components/Fiche_Logement/Tag'
import Stars from '../components/Fiche_Logement/Stars'


function FicheLogement() {
    return (
      <>
        <Banniere />
        <div id='presentation'>
            <div id='gauche'>
                <Nom />
                <div id='tags'>
                    <Tag /><Tag /><Tag />
                </div>
            </div>
            <div id='droite'>
                <Proprietaire />
                <Stars />
            </div>
        </div>
      </>
    )
}


export default FicheLogement;