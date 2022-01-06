import React from 'react'
import { connect } from 'react-redux';

class BlogBanner extends React.Component {   
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const blogId = this.props.match.params.blogId;
        this.props.fetchBlog(blogId)
    }

    render() {

        if(!this.props.blog) return null;
            
        const { icon_url, title } = this.props.blog;
        return (<div id='blog-banner'>
                    <img id='top-bar-blog-image' 
                         src={icon_url}/>
                    <h2  id='top-bar-blog-title'>
                        {title}
                    </h2>
                </div>)
    }
}

const mSTP = (state, ownProps) => {
    return { 
        blog: state.entities.blogs[ownProps.match.params.blogId] 
    }
}

const mDTP = dispatch => ({
    fetchBlog: blogId => dispatch(fetchBlog(blogId))
})

export default connect(mSTP,mDTP)(BlogBanner);