import { connect } from 'react-redux';

import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';


const mSTP = (state, ownProps) => {
    const postId = ownProps.match.params.postId;
    return {
        post: state.entities.posts[postId]
    }
};

const mDTP = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId))
    }
};

export default connect(mSTP, mDTP)(PostShow);