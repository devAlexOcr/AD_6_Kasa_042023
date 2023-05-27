import { useState } from "react"
  

function Stars({rating}) {
    
    const initialState = document.querySelectorAll(".fa-solid")
    const [Star, setStar] = useState(initialState)
    console.log(Star)

    //setStar( () => {
    //    for(let i=0; i < rating; i++) {
    //        Star[i].setAttribute("style", "color: #FF6600;") 
    //       }

    //});

    return (          
       <div id='Stars'>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i> 
       </div>       
    )
    
}





export default Stars