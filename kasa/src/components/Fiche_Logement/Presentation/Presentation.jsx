
import Nom from '../Presentation/nom'
import Proprietaire from '../Presentation/proprietaire'
import Tag from '../Presentation/Tag'
import Stars from '../Presentation/Stars'

function Presentation ({dataLog}) {

    return (

        <div id='presentation'>
        <div id='gauche'>
            <Nom title={dataLog.title} localisation={dataLog.location} />
                <div id='tags'>  
                    {dataLog.tags.map((tag, i) =>
                        <Tag key={i} title={tag} />   
                    )}                                                    
                </div>
        </div>

        <div id='droite'>
            <Proprietaire title={dataLog.host.name} photo={dataLog.host.picture} /> 
            <Stars rating ={dataLog.rating} /> 
        </div>      
    </div>
    )
}

export default Presentation