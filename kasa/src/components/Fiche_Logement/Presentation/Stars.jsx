function Stars({rating}) {
    
  const starNumber = [];
  starNumber.length=5

  // traitement avec map
  

    
      return (      

       <div id='Stars'>
              <i className={(rating>0)?"fa-solid fa-star star-rating" : "fa-solid fa-star"}></i>
              <i className={(rating>1)?"fa-solid fa-star star-rating" : "fa-solid fa-star"}></i>
              <i className={(rating>2)?"fa-solid fa-star star-rating" : "fa-solid fa-star"}></i>
              <i className={(rating>3)?"fa-solid fa-star star-rating" : "fa-solid fa-star"}></i>
              <i className={(rating>4)?"fa-solid fa-star star-rating" : "fa-solid fa-star"}></i>
       </div>       
    )
}

export default Stars