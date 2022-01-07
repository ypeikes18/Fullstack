import React from 'react';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state);
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
        const { title, 
            subtitle,
            body,
            image_url 
        } = this.state;
        debugger
    return(
        <div id='post-form-container'>
            <form onSubmit={this.handleSubmit}
             id='post-form'>

                <input 
                id='post-title'
                type='text'
                value={title}
                onChange={this.update('title')}>
                </input>

                <input
                id='post-subtitle' 
                type='text'
                value={subtitle}
                onChange={this.update('subtitle')}>
                </input>

                <textarea
                id='post-body' 
                type='text'
                value={body}
                onChange={this.update('body')}>
                </textarea>

                <input
                id='post-image_url' 
                type='text'
                value={image_url}
                onChange={this.update('image_url')}>
                </input>

                <button type='submit'
                 className='orange-button'>
                    {this.props.formType}
                </button>
            </form>
        </div>)
        
    }
}

export default PostForm;
