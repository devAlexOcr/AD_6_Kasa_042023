import React from 'react';
import { useState, useRef } from 'react';
import './collapse.css'

const Collapsible = (props) => {

    const toggle = () => {
        setOPen(!open);
      };
    
    const contentRef = useRef();
      if (contentRef.current) console.log(contentRef.current.scrollHeight);

    const [open, setOPen] = useState(false);
        return (
            <div>
                <button onClick={toggle}>{props.label}</button>
            {open && 
            <div  className={open ? "content-show" : "content-parent"}>
              
                    <div className="content">{props.children}</div>   
                
            </div>          
            }
            </div>
        )
}

export default Collapsible
