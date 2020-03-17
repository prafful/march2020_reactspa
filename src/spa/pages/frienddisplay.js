import React from 'react';



class FriendDisplay extends React.Component {
  
    
    render() { 
        
        return ( 
            <tr>
               Me! {this.props.match.params.id}
            </tr>
         );
    }
}
 
export default FriendDisplay;