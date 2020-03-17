import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
    
    render() { 
        return ( 
            <span>
                <ul>
                    <li><Link to="/">Home</Link>  </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/friends"> Friends</Link></li>
                </ul>
            </span>
         );
    }
}
 
export default Menu;