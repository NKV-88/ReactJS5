import React, { Component } from 'react';
import { Link } from 'react-router';

class Post extends Component {
    render() {
        const {userId, id, title, body} = this.props;

        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/posts/${id}`}>{title}</Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{title}</p>
                    <p>{body}</p>
                </div>     
            </div>
        );
    }
}

export default Post;