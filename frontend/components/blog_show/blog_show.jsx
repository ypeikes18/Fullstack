import React from 'react';
import { NavLink } from 'react-router-dom';


import PostPreviewContainer from './post_preview_container';
import BlogBannerContainer from './blog_banner_container';
import PostPlaceholder from './post_placeholder';

class BlogShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stop: 10, sort: 'latest' };
    }

    componentDidMount() {
        const { fetchBlog, match } = this.props;
        const blogId = match.params.blogId;
        fetchBlog(blogId);
    }

    createAttribution() {        
        const { blog } = this.props;
        const { attribution_url } = blog;
        if(!attribution_url) return null;
        
        return (<div className='attribution-container'>
                    <p className='attribution'>
                        This blog was reposted here with the generous permission
                        of the author. Check out the original <a href={attribution_url}>here</a>
                    </p>
                </div>)   
    }

    render() {
        const { blog, match, currentUserId } = this.props;
        if(!blog) return null; 
        const { posts } = blog;

        const blogId = match.params.blogId;
        
        const postPreview = (< PostPreviewContainer 
                                latestPost={true} 
                                postId={posts[0]}/>)

        const postIndex = ( posts[1] ? (
                            <div id='post-index-container'>
                            {
                                posts.slice(1).map( postId => (
                                
                                <PostPreviewContainer 
                                postId={postId}
                                key={postId}/>)
                            )
                            }</div>) : null);
        
        return (
            <div id='blog-show-container'>
                <BlogBannerContainer 
                blog={ blog }
                currentUserId={ currentUserId }/>
                
                {this.createAttribution()}
                
                {/* {preview of latest post or placeholder} */}
                {posts[0] ? postPreview : <PostPlaceholder/>}

                <div id='blog-nav-link-list'>
                        <NavLink to={`/blogs/${blogId}`}>
                            Latest
                        </NavLink>

                        <NavLink to={`/blogs/${blogId}/sort=popular`}>
                            Popular
                        </NavLink>
                </div>
                {posts[1] ? postIndex : null}
            </div>
        )
    }

}

export default BlogShow;



