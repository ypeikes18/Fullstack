import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blog_actions';

import BlogShow from './blog_show';

const mSTP = (state, ownProps) => {
    const blogId = ownProps.match.params.blogId;
    const currentUserId = state.session.currentUserId;

    return { 
        blog: state.entities.blogs[blogId], 
        currentUserId     
    }
    
}

const mDTP = dispatch => {
    return {
    fetchBlog: blogId => dispatch(fetchBlog(blogId))
    }
};

export default connect(mSTP,mDTP)(BlogShow);