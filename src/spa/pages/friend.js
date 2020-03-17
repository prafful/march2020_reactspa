import React from 'react';
import { Link } from 'react-router-dom';


class Friend extends React.Component {
    state = {  }
    render() { 
        
        return ( 
            <tr>
                <td><Link to={'/friend/'+ this.props.id}>{this.props.id}</Link></td>
                <td>{this.props.name}</td>
            </tr>
         );
    }
}
 
export default Friend;