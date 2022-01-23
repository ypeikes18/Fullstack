import { connect } from 'react-redux';

import BlogSearch from './blog_search';
import { fetchBlogs } from '../../actions/blog_actions';

const mSTP = (state, ownProps) => {
    const { blogs } = state.entities;
    return {
        blogs: Object.values(blogs),
        string: ownProps.match.params.string
    }
}

const mDTP = dispatch => {
    return {
        fetchBlogs: string => dispatch(fetchBlogs(string))
    }
}

export default connect(mSTP, mDTP)(BlogSearch);