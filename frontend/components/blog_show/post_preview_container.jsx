import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions/post_actions';

class PostPreview extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {

        const { latestPost, post, postId } = this.props;

        if(!post) return null;

        const { title, 
                subtitle, 
                created_at, 
                blog_id,
                id } = post;

        const postUrl = `/blogs/${blog_id}/posts/${id}`;
        
        const editButton = (< Link to={`/blogs/${blog_id}/posts/${id}`}> 
                            Edit 
                            </Link>)        

        const img = (<img 
                     src={post.image_url}
                     id='post-preview-image'/>);

        const text = ( <div className='post-preview-text'>
                             <h1>{ title }</h1>
                             <span>{ subtitle }</span>
                             <div>
                                 {created_at}
                             </div>
                       </div>);
        const latestPostPreview = (<div id='latest-post-preview'>
                            <Link to={postUrl}>
                                {img}{text}
                            </Link>
                            </div>);               
       
        const postPreview = (<div className='post-preview-container'>
                                <Link to={postUrl}>
                                    {text}
                                </Link> 
                            </div>)


        if(latestPost) {
            return latestPostPreview;
        } else {
            return postPreview;
        }      
    }
}

const mSTP = (state, ownProps) => {
    return { 
        post: state.entities.posts[ownProps.postId], 
        currentUserId: state.session.currentUserId
    }
}

const mDTP = dispatch => {
    return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    deletePost: postId => dispatch(deletePost(postId)) 
    }
}

export default connect(mSTP, mDTP)(PostPreview);