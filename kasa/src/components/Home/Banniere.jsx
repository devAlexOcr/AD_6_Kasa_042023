import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Banniere( {title='', SrcBg='', id} ) {
    const ref = useRef(null);

    useEffect(() => {
        const banImg = ref.current;
        banImg.style.background = `url(${SrcBg}),rgba(0, 0, 0, 0.3)`
        if(title !== "" && (<h1>{title}</h1>)) {
            banImg.classList.add('dark-mode') 
        }
    },[SrcBg, title])   

    return (
    
       <div ref={ref} className="banniere" id={id} >
        { title !== "" && (<h1>{title}</h1>) }
       </div>
       
    )
}

export default Banniere