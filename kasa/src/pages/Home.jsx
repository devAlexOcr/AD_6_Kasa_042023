import { useState, useEffect } from 'react'

import Banniere from '../components/Home/Banniere'
import SrcBg from '../assets/images/background_img.png'

import Carte from '../components/Home/Carte_logement'

import './home.scss'

function Home() {

  const [Logements, setLogements] = useState([]);
  
  useEffect(() => {
    fetch('data/Logements.json'
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
      setLogements(data);
      
    })
  }, []);
    
  return (
    <>    
    <Banniere  title="Chez vous, partout et ailleurs" SrcBg={SrcBg}/>

    <div id="box">
      {
        Logements.map(log => (
          <Carte key={log.id} title={log.title} cover={log.cover} id={log.id} />
        ))
      }
    </div>  
    </>
  )
}

export default Home;
