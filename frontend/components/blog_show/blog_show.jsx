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

    render() {
        if(!this.props.blog) return null; 
        const { posts } = this.props.blog;

        if(!posts[0]) return null;

        const blogId = this.props.match.params.blogId;

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
                blog={ this.props.blog }
                currentUserId={ this.props.currentUserId }/>

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



