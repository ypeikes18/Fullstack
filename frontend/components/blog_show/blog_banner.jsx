import React from 'react'
import { Link } from 'react-router-dom';
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

    componentDidMount() {
        const { fetchBlog, match, blog } = this.props;
        if(blog) return;
        fetchBlog(match.params.blogId)
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
                case `/blogs/:blogId/posts/:postId`:
                    return [<DeleteButtonContainer
                            currentUserId={ currentUserId }
                            entityType='post'
                            entityId={params.postId}/>,
                            <Link to={`/blogs/${blog.id}/posts/${params.postId}/edit`}>
                            Edit post
                            </Link>]
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
 export default BlogBanner;