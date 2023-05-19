import React from 'react'
import Banniere from '../components/Home/Banniere'
import '../pages/fiche.css'
import Nom from '../components/Fiche_Logement/nom'
import Proprietaire from '../components/Fiche_Logement/proprietaire'
import Tag from '../components/Fiche_Logement/Tag'
import Stars from '../components/Fiche_Logement/Stars'
import Collapsible from '../components/Fiche_Logement/Collapsible'
import { Logements } from "../data/Logements.js"
import Slider from '../components/Fiche_Logement/slider.jsx'
import { useParams } from 'react-router-dom'


function FicheLogement() {
    const Params = useParams()
    const logement = Logements.find((Logements) => Logements.id === Params.id)
    let rating = logement.rating
    console.log(rating)
    const stars = document.querySelectorAll(".fa-solid")

function colorStar () {
    for(let i=0; i < rating; i++) {
        stars[i].style.color = '#FF6600'
        }}
        

    return (
      <>
        <Slider />
        <div id='presentation'>
            <div id='gauche'>
                <Nom title={logement.title} localisation={logement.location} />
                <div id='tags'>  
                    {logement.tags.map((tag, i) =>
                    <Tag key={i} title={tag} />   
                    )}                                                    
                </div>
            </div>

            <div id='droite'>
                <Proprietaire title={logement.host.name} photo={logement.host.picture} />                               
                <Stars />
            </div>
        </div>

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
      </>
    )
}


export default FicheLogement;
