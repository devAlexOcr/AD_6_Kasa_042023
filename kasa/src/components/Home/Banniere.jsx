import React from "react";
import { useRef, useEffect } from "react";

function Banniere( {title='', SrcBg=''} ) {
    const ref = useRef(null);

    useEffect(() => {
        const banImg = ref.current;
        banImg.style.backgroundImage = `url(${SrcBg})`
        banImg.style.backgroundPosition = "center"
        banImg.style.backgroundSize= "cover"
    },[SrcBg])                                                                              

    return (
       <div ref={ref} id='banniere'>
        { title !== "" && (<p>{title}</p>)}
       </div>
       
    )
}

export default Banniere