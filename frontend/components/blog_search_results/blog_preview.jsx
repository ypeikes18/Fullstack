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
                <div className='blog-preview-image-container'> 
                    <img 
                    src={icon_url}
                    className='blog-preview-image'/>
                </div>

                <div className='blog-preview-text'>
                    <h1 className='blog-preview-title'>{title}</h1>
                    <p className='blog-preview-description'>{description}</p>
                    <span className='blog-preview-details'>
                        {`By ${author}`}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default BlogPreview