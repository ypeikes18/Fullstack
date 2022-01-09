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

    postValid() {
        let valid = true;
        Object.values(this.state).forEach(value => {
            if(value === '') valid = false; 
        })   
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


        const submitButton = (<button 
                              type='submit'
                              id='post-submit-button'>
                                {this.props.formType}
                              </button>)
            
        const button = (<button 
                        type='button'
                        id='post-unsubmittable-button'>
                            {this.props.formType}
                        </button>)    

        return(
            <div id='post-form-container'>
                <form onSubmit={this.handleSubmit}
                    id='post-form'>

                    <input 
                    placeholder='Enter a title...'
                    id='post-title'
                    type='text'
                    value={title}
                    onChange={this.update('title')}>
                    </input>

                    <input
                    placeholder='Subtitle'
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

                    <div 
                    id='bottom-buttons-container'>
                        {
                        this.postValid() ? ( 
                            submitButton) : (
                                button
                            )
                        }
                    </div>

                </form>
            </div>)
        
    }
}

export default PostForm;
