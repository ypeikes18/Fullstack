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

        this.props.action(this.state)
        .then(
            action => this.props.history.push(`/blogs/${action.blog.id}`), 
            () => null
        )
                 
    }

    update(field) {
        return e => {
            e.preventDefault();
            this.setState({[field]: e.currentTarget.value});
        }
    }

    componentDidMount() {
        const { match, blog } = this.props;
        const blogId = match.params.blogId;
        if(blogId && !blog) {
            this.props.fetchBlog(blogId)
            .then(action => this.setState(action.blog)); 
        }
    }

    renderErrors() {
        const { errors } = this.props;
        if(!errors.length) return null;

        return (
            <ul id='blog-errors'>
                {errors.map((error, i) => (
                    <li key={Math.random()}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    
    render() {
        if(!this.state) return null;
        
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
                    htmlFor='blog-image_url-input'
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
                {this.renderErrors()}

            </div>
            </div>)
        
    }
}

export default BlogForm;

