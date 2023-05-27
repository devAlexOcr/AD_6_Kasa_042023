import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Nom from '../Presentation/nom'
import Proprietaire from '../Presentation/proprietaire'
import Tag from '../Presentation/Tag'
import Stars from '../Presentation/Stars'

import {Logements} from '../../../data/Logements'




function Presentation () {
    
    const Params = useParams()
    const logement = Logements.find((Logements) => Logements.id === Params.id)
    

    const [Star, setStar] = useState([])
    useEffect(() => {
        const listStars = document.querySelectorAll(".fa-solid")
        setStar(listStars)
        console.log("stars" + listStars)
    },[])
    return (
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
            <Stars rating ={logement.rating} />
        </div>      
    </div>
    )
}

export default Presentation