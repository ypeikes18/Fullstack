import React from 'react';

import ThreeDotsDropdown from '.././dropdowns/three_dots_dropdown';

class BlogPreview extends React.Component {

    constructor(props) {
        super(props);
        this.deleteBlog = this.deleteBlog.bind(this);
        this.editBlog = this.editBlog.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { blogId, fetchBlog } = this.props;
        fetchBlog(blogId)
    }

    deleteBlog(e) {
        e.stopPropagation();
        const { deleteBlog, blogId } = this.props;
        deleteBlog(blogId);
    }

    editBlog(e) {
        e.stopPropagation();
        const { history, blogId } = this.props;
        history.push(`/blogs/${blogId}/edit`);
    }

    handleClick(e) {
        e.preventDefault()
        const { blogId, history } = this.props;
        history.push(`/blogs/${blogId}`);
    }

    render() {
        const { blog } = this.props;

        if(!blog) return null;

        return (
            <div 
            class='blog-preview-container'
            onClick={this.handleClick}>
                <h1 className='blog-title'>{blog.title}</h1>
                <h2 className='blog-title'>{blog.description}</h2>
                <img src={blog.icon_url}/>
                < ThreeDotsDropdown options={
                    [
                        <div onClick={this.deleteBlog}>
                            Delete
                        </div>,
                        <div onClick={this.editBlog}>
                            Edit
                        </div>
                    ]
                }/>
            </div>
        )
    }

}

export default BlogPreview;