import { connect } from 'react-redux';

import BlogForm from './blog_form';
import { updateBlog, fetchBlog } from '../../actions/blog_actions';

const mSTP = (state, ownProps) => {
    const blogId = ownProps.match.params.blogId;
    return  {
        blog: state.entities.blogs[blogId],
        formTitle: 'Edit your blog info',
        submitButtonText: 'Continue'
    }
};

const mDTP = dispatch => {
    return {
    action: blog => dispatch(updateBlog(blog)),
    fetchBlog: blogId => dispatch(fetchBlog(blogId))
    }
};

export default connect(mSTP, mDTP)(BlogForm);