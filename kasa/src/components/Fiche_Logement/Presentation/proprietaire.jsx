function Proprietaire({title, photo}) {
    return (
       <div id='proprietaire'>
            <div id="identite">
                <p>{title}</p>
                
            </div>
            <div id="photo">
                <img src={photo} alt='photo proprietaire'/>
            </div>
       </div>
    )
}

export default Proprietaire