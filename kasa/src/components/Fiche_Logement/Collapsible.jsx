import React from 'react';
import { useState, useRef } from 'react';
import './collapse.css'
import fleche from '../../assets/icones/fleche.png'

const Collapsible = (props) => {

    const toggle = () => {
        setOPen(!open);
      };
    

    const [open, setOPen] = useState(false);
        return (
        <div className='collapse'>
                <button onClick={toggle}>{props.label}<img src={fleche} alt="fleche bas" /></button>
            {open && 
            <div  className={open ? "content-show" : "content-parent"}>
              
                    <div className="content">{props.children}</div>   
                
            </div>          
            }
        </div>
        )
}

export default Collapsible
