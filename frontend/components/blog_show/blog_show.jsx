import React from 'react';
import { NavLink } from 'react-router-dom';


import PostPreviewContainer from './post_preview_container';
import BlogBannerContainer from './blog_banner_container';
import PostPlaceholder from './post_placeholder';

class BlogShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stop: 10, sort: 'latest' };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { fetchBlog, match } = this.props;
        const blogId = match.params.blogId;
        fetchBlog(blogId);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ sort: e.currentTarget.id })
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

                <ul id='blog-nav-link-list'>
                        <li 
                        onClick={this.handleClick}
                        className={this.state.sort === 'latest' ? 'active' :  null}
                        id='latest'>
                            Latest
                        </li>

                        <li 
                        onClick={this.handleClick}
                        className={this.state.sort === 'popular' ? 'active' :  null}
                        id='popular'>

                            Popular
                        </li>
                </ul>
                {posts[1] ? postIndex : null}
            </div>
        )
    }

}

export default BlogShow;



