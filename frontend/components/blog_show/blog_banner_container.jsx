import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BlogBanner from './blog_banner';

const mSTP = (state, ownProps) => {
    const blog = state.entities.blogs[ownProps.match.params.blogId];
    const currentUserId = state.session.currentUserId;
    return { 
        blog, 
        currentUserId
    }
}

const mDTP = dispatch => ({
    fetchBlog: blogId => dispatch(fetchBlog(blogId)),
    deletePost: postId => dispatch(deletePost(postId))
})

export default withRouter(
    connect(mSTP,mDTP)(BlogBanner)
);
