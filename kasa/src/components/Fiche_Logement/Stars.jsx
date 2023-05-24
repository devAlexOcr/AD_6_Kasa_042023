import React from "react";

const stars = document.querySelectorAll(".fa-solid")
    

function Stars(rating) {

    for(let i=0; i < rating; i++) {
        stars[i].style.color = '#FF6600'
        }

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