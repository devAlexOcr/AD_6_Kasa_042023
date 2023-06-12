import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Slider from '../components/Fiche_Logement/slider.jsx'
import Presentation from '../components/Fiche_Logement/Presentation/Presentation.jsx'
import Collapse from '../components/Fiche_Logement/Collapse/Collapse.jsx'

import './fiche.scss'

function FicheLogement() {

    const [Logement, setLogements] = useState({});
    
    const Params = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
      fetch('../data/Logements.json'
      ,{
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then(function(response){        
          return response.json();
      })
      .then(function(data) { 
        const Log = data.find((location) => location.id === Params.id)
        if(Log) {
            setLogements(Log)
        }  
        else {
            //redirection page error
                Navigate('/logement-introuvable')
        }       
        ;  
      })
    }, [Params.id, Navigate]);

    return (
        <>
            {
             (Object.keys(Logement).length > 0) ?
                <>   
                    <Slider imageSlider={Logement.pictures} />
                    <Presentation dataLog={Logement} />    
                    <Collapse id={Logement.id} description={Logement.description} equipements={Logement.equipments} height='200px'/>
                </>
                 :
                <></>
            }
        </>    
        
    )
    
}

export default FicheLogement;
