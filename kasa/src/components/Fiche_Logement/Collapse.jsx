import React from 'react';
import { useState } from 'react';
import { children } from 'react';

const Collapsible = (props) => {

    const toggle = () => {
        setOPen(!open);
      };

    const [open, setOPen] = useState(false);
        return (
            <div>
                <button onClick={toggle}>{props.label}</button>
            {open && 
                <div className="toggle">{props.children}</div>             
            }
            </div>
        )
}

export default Collapsible
