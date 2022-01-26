import React from 'react';
import { defaultBlogIconUrl } from '../../util/urls';
import { history } from 'react-router-dom';

class BlogForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.blog;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {   
        e.preventDefault()
        const { id, author_id, title, description, icon_url } = this.state;

        const updatedBlog = { id, author_id, title, description, icon_url };

        this.props.action(updatedBlog)
        .then(action => this.props.history.push(`/blogs/${action.blog.id}`))
                 
    }

    update(field) {
        return e => {
            e.preventDefault();
            this.setState({[field]: e.currentTarget.value});
        }
    }

    componentDidMount() {
        const blogId = this.props.match.params.blogId;
        if(blogId) {
            this.props.fetchBlog(blogId);
        }
 
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    
    render() {
        if(!this.props.blog) return null;
        const { title, icon_url, description } = this.state;
        const { submitButtonText, formTitle } = this.props;

        return(
            <div>
            <div id='blog-form-container'>
                <h1>
                    { formTitle }
                    </h1>
                <form 
                onSubmit={this.handleSubmit}
                id='blog-form'>
                    
                    <label 
                    htmlFor='blog-title-input'
                    id='blog-title-label'>
                        Publication name *
                    </label>
                    <input 
                    id='blog-title-input'
                    type='text'
                    value={title}
                    placeholder={`Enter your publication's name...`}
                    onChange={this.update('title')}>
                    </input>


                    <label 
                    htmlFor='blog-description-input'
                    id='blog-description-label'>
                        {`What’s it about? *`}
                    </label>
                    <input 
                    type='text'
                    placeholder={`E.g "Everything you need to know about finance"`}
                    id='blog-description-input'
                    value={description}
                    onChange={this.update('description')}>
                    </input>

                    <label 
                    for='blog-image_url-input'
                    id='blog-description-label'>
                        {`Choose an image url *`}
                    </label>
                    <input 
                    type='text'
                    placeholder={`Your image url goes here`}
                    id='blog-icon_url-input'
                    value={icon_url}
                    onChange={this.update('icon_url')}>
                    </input>

                    <button type='submit'
                     className='orange-button'>
                        { submitButtonText }
                    </button>

                </form>
            </div>
            <span id='below-blog-form-text'>
            </span>
            </div>)
        
    }
}

export default BlogForm;

