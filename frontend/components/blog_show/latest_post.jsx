import React from 'react';
//NO LONGER NEEDED DELETE IF THAT STAYS TRUE
const LatestPost = ({post}) => {

    
    return (
        <div id='latest-post-container'>
            <div id='latest-post-image-container'>
                <img src={''}/>
            </div>
            <div id='latest-post-text'>
                <h1>{post.title}</h1>
                <span>{post.subtitle}</span>
            </div>
        </div>
    )
}

export default LatestPost;