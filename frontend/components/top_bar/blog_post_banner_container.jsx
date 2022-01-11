import { connect } from 'react-redux';

import BlogBanner from './blog_banner';

const mSTP = (state, ownProps) => {
    const blog = state.entities.blogs[ownProps.match.params.blogId];
    const currentUserId = state.session.currentUserId;
    return { 
        blog, 
        currentUserId,
        type: 'edit'
    }
}

const mDTP = dispatch => ({
    fetchBlog: blogId => dispatch(fetchBlog(blogId))
})

export default connect(mSTP,mDTP)(BlogBanner);
