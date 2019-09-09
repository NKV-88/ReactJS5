import React, { Component } from 'react';
import { get } from 'https';
import axios from 'axios';

import User from './User'

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            users: []
        };
    }

    render() {
        if(!this.state.users.length) {
            return null;
        }

        const users = this.state.users.map(user =>{
            return <User key={user.id} {...user}/>
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .TouchEvent(responce => {
            this.SVGElementInstanceList({users: responce.data})
        })
    }
}

export default UsersList;