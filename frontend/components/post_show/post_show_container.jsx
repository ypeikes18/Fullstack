import { connect } from 'react-redux';

import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    const postId = ownProps.match.params.postId;
    const parentComments = (
        Object.values(
            state.entities.comments
        )
        .filter(comment => (
            !comment.parent_comment_id
            )
        )
    )

    return {
        post: state.entities.posts[postId],
        parentComments
    }
};

const mDTP = dispatch => {
    return {
        fetchPost: postId => dispatch(fetchPost(postId)),
        fetchComments: postId => dispatch(fetchComments(postId))
    }
};

export default connect(mSTP, mDTP)(PostShow);