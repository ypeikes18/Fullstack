import React from 'react';
import TopBar from '../top_bar/home_top_bar';

import BlogPreview from './blog_preview';
import SearchBarContainer from '../search_bar/search_bar';

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
                <div className='blog-previews-container'>
                    { blogs.map(blog => (
                        <BlogPreview blog={blog}/>)
                        )}
                </div>
            )
        }
   
        return (<div id='blog-search-container'>
            <TopBar hideSearch={true}/>
            <h1>Find great things to read</h1>
            <p> Find writers you follow or search by title
            </p>
            <SearchBarContainer/>
            <div className='search-results-content-body'>
                { blogPreviews }
            </div>

        </div>)
    }
}

export default BlogSearch;