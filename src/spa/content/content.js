import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Friends from '../pages/friends';

import FriendDisplay from '../pages/frienddisplay';

class Content extends React.Component {
    
    render() { 
        return ( 
            <span>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/friends" component={Friends}></Route>
                    <Route path="/friend/:id" component={FriendDisplay}></Route>

                </Switch>
            </span>
         );
    }
}
 
export default Content;