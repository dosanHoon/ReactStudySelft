import React from 'react';
import { Route, Link } from 'react-router-dom';

import './posts.css'

const Post = ({match}) => {
    return (
        <h2>
            {match.params.title}
        </h2>
    )
}

const Posts = () => {
    return (
        <div>
            <h1>포스트</h1>
            <Link className="post link" to="/posts/react">React</Link>
            <Link className="post link" to="/posts/redux">Redux</Link>
            <Link className="post link" to="/posts/relay">Relay</Link>
            <Route 
                path="/posts/:title"
                component={Post}
            />
        </div>
    );
};

export default Posts;