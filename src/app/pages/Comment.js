import React, { Component } from 'react';
import axios from 'axios';
import CommentFile from '../components/Comment';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null
        };
    }
    render() {
        return (
            <div>
               {this.state.comment ? <CommentFile {...this.state.comment} /> : null } 
            </div>
        );
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`) 
        .then (response => {
         const comment = response.data;
         this.setState({comment: comment})   
        })
    }
}

export default Comment;