import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions/post_actions';
import Dropdown from '.././dropdowns/dropdown';
import LikeButtonContainer from '../buttons/like_button_container';

class PostPreview extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.forceUpdate = this.forceUpdate.bind(this);
    }

    createDropdown() {
        return (<div className='button-bar'>
                        {/* takes in an array of props to display as option */}
                            {<Dropdown 
                              options=
                              {[(<div onClick={this.editPost}>Edit</div>),
                                (<div onClick={this.deletePost}>Delete</div>)]}/>}
                </div>);
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

    userIsAuthor() {
        return this.props.currentUserId === this.props.post.authorId;
    }

    createButtons() {

        const { post } = this.props;
        
        const likeButton = <LikeButtonContainer
                            likableType='Post'
                            likableId={post.id}
                            likeId={post.likeId}/>

        const dropdown = this.userIsAuthor() ? this.createDropdown() : null

        return (<div className='post-preview-buttons-container'>
                    {dropdown}
                    {likeButton}
                </div>)
    }

    render() {

        const { latestPost, post } = this.props;

        if(!post) return null;

        const { title, 
                subtitle, 
                created_at } = post;

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

        const latestPostPreview = (<div id='latest-post-preview'
                                   onClick={this.handleClick}>
                                     <div className='latest-post-preview-image-container'>
                                        {img}
                                     </div>
                                     <div className='latest-post-preview-content-container'>
                                        {text}
                                        {this.createButtons()}
                                     </div>
                                   </div>);               
       
        const postPreview = (<div className='post-preview-container'>
                                <div onClick={this.handleClick}>
                                    {text}
                                    {this.createButtons()}
                                </div> 
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