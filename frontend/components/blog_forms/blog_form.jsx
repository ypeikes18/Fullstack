import React from 'react';

class BlogForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.blog;
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
        const { title, description } = this.state;
        return(
            <div id='blog-form-container'>
                <form onSubmit={this.handleSubmit}>

                    <input 
                    type='text'
                    value={title}
                    onChange={this.update('title')}>
                    </input>

                    <input 
                    type='text'
                    value={description}
                    onChange={this.update('description')}>
                    </input>

                    <button type='submit'
                     className='orange-button'>
                        {this.props.formType}
                    </button>

                </form>
            </div>
        )
    }
}

export default BlogForm;

