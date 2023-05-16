import React from 'react'
import './slider.css'

import chevronLeft from '../../assets/icones/chevronLeft.png'
import chevronRight from '../../assets/icones/chevronRight.png'

import { Logements } from "../../data/Logements"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Slider ()  {

    const [index, setIndex] = useState(0)

    const Params = useParams()
    const logement = Logements.find((Logements) => Logements.id === Params.id)


    const imageSlider =  logement.pictures

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
