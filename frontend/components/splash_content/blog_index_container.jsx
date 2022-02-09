import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { fetchBlogs } from '../../actions/blog_actions';
import BlogIndex from './blog_index';

const mSTP = state => {
    const { blogs } = state.entities;
    return {
        blogs: Object.values(blogs),
        currentUserId: state.session.currentUserId
    }
}

const mDTP = dispatch => {
    return {
        fetchBlogs: (type, string) => dispatch(fetchBlogs(type, string))
    }
}

export default withRouter(
    connect(mSTP, mDTP)(BlogIndex)
);