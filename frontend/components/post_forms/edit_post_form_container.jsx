import { connect } from 'react-redux';

import PostForm from './post_form';
import { updatePost, fetchPost } from '../../actions/post_actions'; 

const mSTP = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.postId],
    formType: 'Edit post'
});

const mDTP = dispatch => {
    return {
                action: post => dispatch(updatePost(post)),
                fetchPost: postId => dispatch(fetchPost(postId))
            }
}


export default connect(mSTP, mDTP)(PostForm);