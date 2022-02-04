import React from 'react';
import BlogPreview from './blog_preview';

const BlogPreviews = ({ blogs }) => {
    return(
        <div className='blog-previews-container'>
            { blogs.map(blog => (
                <BlogPreview blog={blog}
                key={blog.id}/>)
                )}
        </div>
    )
}

export default BlogPreviews;