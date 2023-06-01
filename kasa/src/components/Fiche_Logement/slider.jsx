import { useState, useEffect } from 'react'

import chevronLeft from '../../assets/icones/chevronLeft.png'
import chevronRight from '../../assets/icones/chevronRight.png'




function Slider ({imageSlider})  {

    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex(index + 1)
        if(index === imageSlider.length - 1){
            setIndex(0)
        }
    }

    const previousSlide= () => {
        setIndex (index - 1)
        if(index === 0) {
            setIndex(imageSlider.length - 1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide()
        }, 4000)
        return () => clearInterval(interval)
    }, [index])

    return (
        <div className='slider' >
            <div 
                className='slideshow'
                style={{backgroundImage : `url(${imageSlider[index]})`}}
            >
                <img 
                    className='btn-left'
                    src={chevronLeft}
                    alt='button-left'
                    onClick={previousSlide}
                />
                <img 
                    className='btn-right'
                    src={chevronRight}
                    alt='button-right'
                    onClick={nextSlide}
                />
            </div>
        </div>
    )
}

export default Slider
