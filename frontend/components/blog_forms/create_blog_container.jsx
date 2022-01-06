import { connect } from 'react-redux';

import BlogForm from './blog_form';
import { createBlog } from '../../actions/blog_actions';

const mSTP = () => {
    return  { blog: {
                title: '',
                description: ''
            }
        }
}

const mDTP = dispatch => ({
    action: blog => dispatch(createBlog(blog))
})

export default connect(mSTP, mDTP)(BlogForm);