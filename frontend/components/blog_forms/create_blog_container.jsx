import { connect } from 'react-redux';

import BlogForm from './blog_form';
import { createBlog } from '../../actions/blog_actions';
import { defaultBlogIconUrl } from '../../util/urls';

const mSTP = state => {
    return  {
        blog: {
            title: '',
            description: '',
            author_id: '',
            icon_url: defaultBlogIconUrl,
            author_id: state.session.currentUserId
        },
        formType: 'Create blog'
    }
};

const mDTP = dispatch => ({
    action: blog => dispatch(createBlog(blog))
});

export default connect(mSTP, mDTP)(BlogForm);