import React from 'react'
import { Link } from 'react-router-dom';

class BlogBanner extends React.Component {   
    constructor(props) {
        super(props);
        this.state = { showButton: true }
    }

    componentDidMount() {
        const { fetchBlog, match } = this.props;
        const blogId = match.params.blogId;
        fetchBlog(blogId);

        if(this.props.fetchPost) {
            this.props.fetchPost(match.params.postId)
        }
    }

    showButton() {
        const { currentUserId, blog } = this.props;
        return (currentUserId === blog.author_id);
    }

    render() {
        const { blog, match } = this.props
        
        if(!blog) return null;

        const buttons = (this.showButton()) ? (
            <div id='authors-buttons-container'>
                <Link to={`/blogs/${blog.id}/new-post`}>
                    New post
                </Link>
                <Link to={`/blogs/${blog.id}/edit`}>
                    Edit blog
                </Link>
            </div>
            ) : ( <div>
                  </div>);
            
        const { icon_url, title } = this.props.blog;
        return (<div id='blog-banner'>
                    <img id='top-bar-blog-image' 
                         src={icon_url}/>
                    <h2  id='top-bar-blog-title'>
                        {title}
                    </h2>
                    {buttons}
                </div>)
    }
}

export default BlogBanner;