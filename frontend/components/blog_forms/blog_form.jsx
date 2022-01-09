import React from 'react';
import { defaultBlogIconUrl } from '../../util/urls';

class BlogForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.blog;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {   
        e.preventDefault()
        const stateToSubmit = Object.assign(
            {}, 
            this.state,
            this.props.hiddenInput);
        if(this.state.icon_url === '') {
            stateToSubmit.icon_url = defaultBlogIconUrl
        }
        this.props.action(stateToSubmit);
    }

    update(field) {
        return e => {
            e.preventDefault();
            this.setState({[field]: e.currentTarget.value});
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
        const { title, icon_url, description } = this.state;
        const { submitButtonText, formTitle } = this.props;
        return(
            <div>
            <div id='blog-form-container'>
                <h1>
                    { formTitle }
                    </h1>
                <form onSubmit={this.handleSubmit}
                id='blog-form'>
                    
                    <label 
                    for='blog-title-input'
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
                    for='blog-description-input'
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

