import { connect } from 'react-redux';

import BlogForm from './blog_form';
import { editBlog } from '../../actions/blog_actions';

const mSTP = (state, ownParams) => {
    return  {
        blog: {
            title: '',
            description: '',
            icon_url: ''
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
    action: blog => dispatch(editBlog(blog))
    }
};

export default connect(mSTP, mDTP)(BlogForm);