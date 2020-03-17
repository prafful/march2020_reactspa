import React from 'react';
import axios from 'axios'
import Friend from './friend';

class Friends extends React.Component {

    constructor(props){
        super(props)
        console.log(props);
        this.id = this.props.match.params.id
        this.state = {
            friends:[]
        }
    }
    
    componentWillMount(){
        this.displayAll()
    }

    displayAll = function(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( res=>{
                            console.log(res.data);
                            this.setState({
                                friends: res.data
                            })
                        }, err=>{
                            console.log(err);    
                        })
    }
    
    renderFriends = function(){
        return this.state.friends.map( f =>{
            return (
                <Friend key={f.id}
                        name ={f.name}
                        id={f.id}
                ></Friend>
            )
        })
    }

    render() { 
       
        return (
            <span> 
            <h1>
                Friend page!!!! for any ID: 
            </h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderFriends()}
                </tbody>
            </table>

            
            </span>
         );
    }
}
 
export default Friends;