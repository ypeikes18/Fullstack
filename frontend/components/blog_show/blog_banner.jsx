import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SubscribeButtonContainer from '../buttons/subscribe_button_container';
import DeleteButtonContainer from '../buttons/delete_button_container';

class BlogBanner extends React.Component {   
    constructor(props) {
        super(props);
        this.state = { showButton: true }
        this.isAuthor = this.isAuthor.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.createButtons = this.createButtons.bind(this);
    }

    isAuthor() {
        const { currentUserId, blog } = this.props;
        return (currentUserId === blog.author_id);
    }

    deletePost() {
        const { deletePost, match} = this.props;
        return () => (
            deletePost(match.params.postId)
        )
    }

    createButtons() {        
        const { currentUserId, match, blog } = this.props;

        if(this.isAuthor()) {
            const { path, params } = match;

            switch(path) {
                case `/blogs/:blogId/posts/:postId/edit`:
                    return (<DeleteButtonContainer
                            currentUserId={ currentUserId }
                            type='post'
                            entityId={params.postId}/>)
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
        } else {
            return (< SubscribeButtonContainer
                    blogId={blog.id}
                    subscriptionId={blog.subscriptionId}/>)
        }
    }
        


    render() {
        const { blog } = this.props
        
        if(!blog) return null;
            
        const { icon_url, title } = blog;
        return (<div id='blog-banner-container'>
                    <div className='blog-banner'>
                        <div className='image-and-text'>
                            <img id='top-bar-blog-image' 
                                src={icon_url}/>
                            <h2  id='top-bar-blog-title'>
                                {title}
                            </h2>
                        </div>      
                            { this.createButtons() }                  
                    </div>
                </div>)
    }
}



export default withRouter(
    connect(null, null)(BlogBanner)
);