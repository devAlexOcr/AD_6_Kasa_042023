import { useState, useRef} from 'react';

import fleche from '../../../assets/icones/fleche.png'


const Collapsible = (props) => {

    const contentRef = useRef()
    const iconeRef = useRef()

    const toggle = () => {
        setOPen(!open); 
        if(open) {
            iconeRef.current.classList.remove('rotate')
        }else{
            iconeRef.current.classList.add('rotate')
        }


    } 

    const [open, setOPen] = useState(false);
    
        return (
            <div className='collapse'>

                <button onClick={toggle} >
                    {props.label}
                    <img  src={fleche} alt="fleche bas" ref={iconeRef} />
                </button>  
                        <div className="content-parent" >
                            <div className='content'ref={contentRef}
                            style={open ? {height: contentRef.current= "150px"}
                                         : {height: "0px"}
                            }>
                                {props.children}
                            </div>
                        </div>
                      
            </div>
        )
    }


export default Collapsible
