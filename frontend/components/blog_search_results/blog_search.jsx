import React from 'react';
import TopBar from '../top_bar/home_top_bar';

import BlogPreview from './blog_preview';
import SearchBarContainer from '../search_bar/search_bar';

class BlogSearch extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     const { string, fetchBlogs } = this.props;
    //     fetchBlogs(string)
    // }

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
            <h1 id='blog-search-page-header'>
                Find great things to read
            </h1>
            <p id='blog-search-page-p'> 
                Find writers you follow or search by title
            </p>
            
            <div className='search-results-content-body'>
                <div id='search-bar-form-container'>
                    <SearchBarContainer/>
                    
                </div>
                <p>
                        Showing results for 
                        <strong>
                            {` "${this.props.string}"`}
                        </strong>
                </p>
                { blogPreviews }
            </div>

        </div>)
    }
}

export default BlogSearch;