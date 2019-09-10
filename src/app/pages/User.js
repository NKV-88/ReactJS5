import React, { Component } from 'react';
import axios from 'axios';
import UserProFile from '../components/User';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    render() {
        return (
            <div>
               {this.state.user ? <UserProFile {...this.state.user} /> : null } 
            </div>
        );
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`) 
        .then (response => {
         const user = response.data;
         this.setState({user: user})   
        })
    }
}

export default User;