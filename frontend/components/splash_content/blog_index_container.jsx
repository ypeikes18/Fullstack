import { connect } from 'react-redux';

import { fetchBlogs } from '../../actions/blog_actions';
import BlogIndex from './blog_index';

const mSTP = state => {
    const { blogs } = state.entities;
    return {
        blogs: Object.values(blogs),
    }
}

const mDTP = dispatch => {
    return {
        fetchBlogs: (type, string) => dispatch(fetchBlogs(type, string))
    }
}

export default connect(mSTP, mDTP)(BlogIndex);