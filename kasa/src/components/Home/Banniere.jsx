import { useRef, useEffect } from "react";

function Banniere( {title='', SrcBg=''} ) {
    const ref = useRef(null);

    useEffect(() => {
        const banImg = ref.current;
        banImg.style.background = `url(${SrcBg}),rgba(0, 0, 0, 0.3)`
        if(title !== "" && (<h1>{title}</h1>)) {
            banImg.classList.add('dark-mode') 
        }
    },[SrcBg, title])   

    return (
    
       <div ref={ref} id='banniere'>
        { title !== "" && (<h1>{title}</h1>) }
       </div>
       
    )
}

export default Banniere