import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Friends from '../pages/friends';

class Content extends React.Component {
    
    render() { 
        return ( 
            <span>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/friends" component={Friends}></Route>

                </Switch>
            </span>
         );
    }
}
 
export default Content;