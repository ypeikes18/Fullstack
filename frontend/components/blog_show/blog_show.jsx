import React from 'react';
import { NavLink } from 'react-router-dom';


import PostPreviewContainer from './post_preview_container';
import BlogBanner from '../top_bar/blog_banner'

class BlogShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stop: 10, sort: 'latest' };
    }

    componentDidMount() {
        const blogId = parseInt(this.props.match.params.blogId);
        this.props.fetchBlog(blogId);
    }

    createAttribution() {
        const { attribution_url } = this.props.blog;
        if(!attribution_url) return null;
        
        return (<div className='attribution-container'>
                    <p className='attribution'>
                        This blog was reposted here with the generous permission
                        of the author. Check out the original <a href={blog.attribution_url}>here</a>
                    </p>
                </div>)   
    }

    render() {
        const { blog, match, currentUserId } = this.props;
        if(!blog) return null; 
        const { posts } = blog;

        if(!posts[0]) return null;

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
                <BlogBanner 
                blog={ blog }
                currentUserId={ currentUserId }/>
                
                {this.createAttribution()}

                {posts[0] ? postPreview : null}
                <div id='blog-nav-link-list'>
                        <NavLink to={`blogs/${blogId}`}>
                            Latest
                        </NavLink>

                        <NavLink to={`blogs/${blogId}/sort=popular`}>
                            Popular
                        </NavLink>
                </div>
                {posts[1] ? postIndex : null}
            </div>
        )
    }

}

export default BlogShow;



