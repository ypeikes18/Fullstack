import { connect } from 'react-redux';

import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'; 

const mSTP = (state, ownProps) => ({
    post: {
       title: '',
       subtitle:'',
       body: '',
       image_url: '',
       blog_id: ownProps.match.params.blogId 
    },
    formType: 'Create post'
});

const mDTP = dispatch => ({
    action: post => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(PostForm);