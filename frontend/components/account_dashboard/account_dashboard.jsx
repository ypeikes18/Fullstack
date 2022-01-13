import React from 'react';
import { connect } from 'react-redux';

import BlogPreviewContainer from './blog_preview_container';

class AccountDashboard extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const user = this.props.user;
        return (
                <div id='account-dashboard'>
                    
                    
                    
                    <div id='blog-previews-container'>
                        {user.blogs.map(blogId => (
                            <BlogPreviewContainer
                            blogId={blogId}/>
                        ))}
                    </div>

                </div>)
    }
}

const mSTP = state => {
    const currentUserId = state.session.currentUserId;
    return {
        user: state.entities.users[currentUserId]
    }
}

const mDTP = dispatch => {
    return {
        
    }
}

export default connect(mSTP, mDTP)(AccountDashboard);



