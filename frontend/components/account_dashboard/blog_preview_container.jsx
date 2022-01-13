import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBlog, deleteBlog } from '../.././actions/blog_actions';
import BlogPreview from './blog_preview';

const mSTP = (state, ownProps) => {
    const blogId = ownProps.blogId;
    return {
        blog: state.entities.blogs[blogId]
    }
}

const mDTP = dispatch => {
    return {
        fetchBlog: blogId => dispatch(fetchBlog(blogId)),
        deleteBlog: blogId => dispatch(deleteBlog(blogId))
    }
}

export default withRouter(
    connect(mSTP, mDTP)(BlogPreview)
);

