import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blog_actions';

import BlogShow from './blog_show';

const mSTP = (state, ownProps) => {
    return (
        { blog: state.entities.blogs[ownProps.match.params.id]  }
    )
}

const mDTP = dispatch => ({
    fetchBlog: blogId => dispatch(fetchBlog(blogId))
});

export default connect(mSTP,mDTP)(BlogShow);