import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LikeButton from './like_button';
import { createLike, deleteLike } from '../../actions/like_actions';

const mSTP = state => {
    return {
        userId: state.session.currentUserId
    }
}

const mDTP = dispatch => {
    return {
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId))
    }
}

export default withRouter(
    connect(mSTP,mDTP)(LikeButton));