import React from "react";
import  {Link} from 'react-router-dom'
import { useEffect, useRef } from "react";

function Carte({title, cover, id}) {

    const carte = useRef(null);
    useEffect(() => {
        const ImgCover = carte.current;
        ImgCover.style.background = `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5)100%),url(${cover})no-repeat`
        ImgCover.style.backgroundSize = 'cover'
    },[cover])

    return (
    <>
    <Link to={/FicheLogement/ + id}>
       <div ref={carte} id='carte'>
        <h2>{title}</h2>        
       </div>
    </Link>
    </>
    )
}

export default Carte