import React from 'react'
import { Link } from 'react-router-dom';
import SubscribeButtonContainer from '../buttons/subscribe_button_container';

class BlogBanner extends React.Component {   
    constructor(props) {
        super(props);
        this.state = { showButton: true }
        this.showButton = this.showButton.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.createButtons = this.createButtons.bind(this);
    }

    showButton() {
        const { currentUserId, blog } = this.props;
        return (currentUserId === blog.author_id);
    }

    deletePost() {
        return () => (
            this.props.deletePost(this.props.match.params.postId)
        )
    }

    createButtons() {
        if(!this.showButton()) return null;
        
        switch(this.props.match.path) {
            case `/blogs/:blogId/posts/:postId/edit`:
                return (<div id='authors-buttons-container'>
                            <button
                            type='button'
                            onClick={deletePost()}>
                                Delete Post
                            </button>
                        </div>)
            case `/blogs/:blogId`:
                return (
                    <div id='authors-buttons-container'>
                        <Link to={`/blogs/${blog.id}/new-post`}>
                            New post
                        </Link>
                        <Link to={`/blogs/${blog.id}/edit`}>
                            Edit blog
                        </Link>
                     </div>
                )
            default:
                return null;
        }
    }

    render() {
        const { blog, match } = this.props
        
        if(!blog) return null;

        const blogButtons = (this.showButton()) ? (
            <div id='authors-buttons-container'>
                <Link to={`/blogs/${blog.id}/new-post`}>
                    New post
                </Link>
                <Link to={`/blogs/${blog.id}/edit`}>
                    Edit blog
                </Link>
                < SubscribeButtonContainer
                        blogId={blog.id}
                        subscriptionId={blog.subscriptionId}/>
            </div>
            ) : (null);
            
        const { icon_url, title } = blog;
        return (<div id='blog-banner'>
                    <img id='top-bar-blog-image' 
                         src={icon_url}/>
                    <h2  id='top-bar-blog-title'>
                        {title}
                    </h2>
                    { blogButtons }
                </div>)
    }
}

export default BlogBanner;