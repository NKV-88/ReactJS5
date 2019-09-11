import React, { Component } from 'react';
import { Link } from 'react-router';

class Comment extends Component {
    render() {
        const {postId, id, name, email, body} = this.props;

        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/comments/${id}`}>{name}</Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{body}</p>
                </div>     
            </div>
        );
    }
}

export default Comment;