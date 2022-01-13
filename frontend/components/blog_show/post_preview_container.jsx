import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions/post_actions';
import ThreeDotsDropdown from '.././dropdowns/three_dots_dropdown';

class PostPreview extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.forceUpdate = this.forceUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    handleClick(e) {
        const { postId, history, post } = this.props;
        history.push(`/blogs/${post.blog_id}/posts/${postId}`);
    }

    editPost() {
        const { post, history } = this.props;
        const { id, blog_id } = post;
        history.push(`/blogs/${blog_id}/posts/${id}/edit`); 
    }

    deletePost() {
        const { deletePost, post } = this.props;
        deletePost(post.id);
        this.forceUpdate();
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
        const editPostUrl = `/blogs/${blog_id}/posts/${id}/edit`;

        
        const editButton = (< Link to={editPostUrl}> 
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

        const dropdown = (<div class='button-bar'>
                        {/* takes in an array of props to display as option */}
                            {<ThreeDotsDropdown 
                              options=
                              {[(<div onClick={this.editPost}>Edit</div>),
                                (<div onClick={this.deletePost}>Delete</div>)]}/>}
                         </div>);

        const latestPostPreview = (<div id='latest-post-preview'>
                            <div onClick={this.handleClick}>
                                {img}
                                {text}
                                {dropdown}

                            </div>
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

export default  withRouter(
                    connect(mSTP, mDTP)(PostPreview));