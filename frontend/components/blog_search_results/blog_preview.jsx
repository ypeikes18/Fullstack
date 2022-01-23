import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = ({ blog }) => {
    const { id,
        title, 
        author, 
        icon_url, 
        description } = blog;

    return(
        <Link to={`/blogs/${id}`}>
            <div 
            className='blog-preview-container'>
                <img 
                src={icon_url}
                className='blog-preview-image'/>
                <div className='blog-preview-text'>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <span>{`By #${author}`}</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogPreview