import React from 'react';

import { defaultPostIconUrl } from '../../util/urls';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        const fetchPost = this.props.fetchPost;
        if(fetchPost) fetchPost(postId);   
    }

    handleSubmit(e) {
        e.preventDefault()
        const imageUrl = defaultPostIconUrl;

        if(this.state.image_url === '') {
            this.setState({
                image_url: imageUrl
            })
        }

        if(this.props.action(this.state)){
            this.props.history.push(`/blogs/${this.props.match.params.blogId}`)
        }
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

        if(!this.state) return null;

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
                    placeholder='Write your post...'
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
                                submitButton
                            )
                        }
                    </div>

                </form>
            </div>)
        
    }
}

export default PostForm;
