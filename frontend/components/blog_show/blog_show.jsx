import React from 'react';

import PostPreviewContainer from './post_preview_container';

class BlogShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stop: 10 };
    }

    componentDidMount() {
        const blogId = parseInt(this.props.match.params.blogId);
        this.props.fetchBlog(blogId);
    }

    render() {
        if(!this.props.blog) return null; 
        const { posts } = this.props.blog;

        if(!posts[0]) return null;
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
                            }</div>) : (<div></div>));
        
        return (
            <div id='blog-show-container'>
                {posts[0] ? postPreview : (<></>)}
                {posts[1] ? postIndex : (<></>)}
            </div>
        )
    }

}

export default BlogShow;



