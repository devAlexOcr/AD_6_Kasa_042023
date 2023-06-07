import { useState, useRef} from 'react';

import fleche from '../../../assets/icones/fleche.png'


const Collapsible = (props) => {

    const contentRef = useRef()


    const toggle = () => {
        setOPen(!open); 
    } 

    const [open, setOPen] = useState(false);
    
        return (
            <div className='collapse'>

                <button onClick={toggle}>
                    {props.label}
                    <img src={fleche} alt="fleche bas" />
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
