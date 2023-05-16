import React from "react";
import { useRef, useEffect } from "react";

function Banniere( {title='', SrcBg=''} ) {
    const ref = useRef(null);

    useEffect(() => {
        const banImg = ref.current;
        banImg.style.background = `url(${SrcBg}), rgb(0,0,0,0.3)`
        banImg.style.backgroundPosition = "center"
        banImg.style.backgroundSize= "cover"
        banImg.style.backgroundBlendMode ="darken"
        
    },[SrcBg])                                                                              

    return (
       <div ref={ref} id='banniere'>
        { title !== "" && (<p>{title}</p>)}
       </div>
       
    )
}

export default Banniere