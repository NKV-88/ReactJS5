import React, { Component } from 'react';
import { Link } from 'react-router';



class MenuItem extends Component {
    render() {
        return (
            <li className={this.props.active ? "nav-item" : "nav-item"}>
                <Link to={this.ptops.href} className="nav-link"></Link>
                {this.props.children}                
            </li>
        );
    }
}

export default MenuItem;