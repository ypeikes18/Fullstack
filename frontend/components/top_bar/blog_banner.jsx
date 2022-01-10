import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BlogBanner extends React.Component {   
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const blogId = this.props.match.params.blogId;
        this.props.fetchBlog(blogId);
    }

    authorizedUser() {
        const { currentUserId, blog } = this.props;
        return currentUserId === blog.author_id;
    }

    render() {
        const { blog, usersBlog } = this.props
        
        if(!blog) return null;

        const authorsButtons = this.authorizedUser() ? (
            <div id='authors-buttons-container'>
                <Link to={`/`}>
                    New Post
                </Link>
            </div>
            ) : ( <div></div>);
            
        const { icon_url, title } = this.props.blog;
        return (<div id='blog-banner'>
                    <img id='top-bar-blog-image' 
                         src={icon_url}/>
                    <h2  id='top-bar-blog-title'>
                        {title}
                    </h2>
                    {authorsButtons}
                </div>)
    }
}

const mSTP = (state, ownProps) => {
    const blog = state.entities.blogs[ownProps.match.params.blogId];
    const currentUserId = state.session.currentUserId;
    return { 
        blog, 
        currentUserId
    }
}

const mDTP = dispatch => ({
    fetchBlog: blogId => dispatch(fetchBlog(blogId))
})

export default connect(mSTP,mDTP)(BlogBanner);