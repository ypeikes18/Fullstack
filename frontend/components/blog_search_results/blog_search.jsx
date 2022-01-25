import React from 'react';

import BlogPreview from './blog_preview'

class BlogSearch extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { string, fetchBlogs } = this.props;
        fetchBlogs(string)
    }

    render() {
        const { blogs } = this.props;
        let blogPreviews;

        if(!blogs) {
            return null
        } else {
            blogPreviews = (
                <div>
                    { blogs.map(blog => (
                        <BlogPreview blog={blog}/>)
                        )}
                </div>
            )
        }
   
        return (<div id='blog-search-container'>
            <h1>The home for great writing.</h1>
            <p>We believe that what you read matters and great writing 
                is valuable. We’re building a future where writers can 
                flourish by being paid directly by readers.
            </p>
            { blogPreviews }
        </div>)
    }
}

export default BlogSearch;