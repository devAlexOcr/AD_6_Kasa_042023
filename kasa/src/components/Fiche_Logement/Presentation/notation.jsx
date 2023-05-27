function Notation({rating, props}) {
    console.log(props)
    for(let i=0; i < rating; i++) {
    props[i].style.color = '#FF6600'
    }
}

export default Notation