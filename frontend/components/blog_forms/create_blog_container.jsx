import { connect } from 'react-redux';

import BlogForm from './blog_form';
import { createBlog } from '../../actions/blog_actions';

const mSTP = state => {
    return  {
        blog: {
            title: '',
            description: '',
            icon_url: '',
            author_id: state.session.currentUserId
        },
        hiddenInput: {
            author_id: state.session.currentUserId
        },
        formTitle: 'Create your publication',
        submitButtonText: 'Continue'
    }
};

const mDTP = dispatch => {
    return {
    action: blog => dispatch(createBlog(blog))
    }
};

export default connect(mSTP, mDTP)(BlogForm);