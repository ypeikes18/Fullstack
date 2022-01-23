import React from 'react';

const BlogPreview = ({ blog }) => {
    debugger
    const { title, 
        author, 
        icon_url, 
        description } = blog;

    return(
        <div className='blog-preview-container'>
            <img 
            src={icon_url}
            className='blog-preview-image'/>
            <div className='blog-preview-text'>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <span>{`By #${author}`}</span>
            </div>
        </div>
    )
}

export default BlogPreview