import React from 'react';

const Post = (prop) => {
    const {id, title, body} = prop;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;