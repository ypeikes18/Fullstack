import React from 'react';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.addListener()

        const postId = this.props.match.params.postId;
        const fetchPost = this.props.fetchPost;

        if(fetchPost) {
            fetchPost(postId)
            .then(action => this.setState(action.post));
        }   
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', () => {
            const footer = document.getElementById('footer');
            const footerHeight = footer.offsetHeight;

            const button = document.getElementById('post-form-bottom-buttons-container');
            if(!button) return;

            if(window.scrollY >= window.innerHeight - footerHeight) {
                button.className = 'absolute';
            } else {
                button.className = 'fixed';
            }
        })
    }


    addListener() {
        document.addEventListener('scroll', () => {
            const footer = document.getElementById('footer');
            const footerHeight = footer.offsetHeight;

            const button = document.getElementById('post-form-bottom-buttons-container');
            if(!button) return;

            if(window.scrollY >= window.innerHeight - footerHeight) {
                button.className = 'absolute';
            } else {
                button.className = 'fixed';
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const { action, history, match } = this.props;

        if(action(this.state)){
            history.push(`/blogs/${match.params.blogId}`)
        }
        // add a line to handle error if desired
    }

    update(field) {
        return e => {
            e.preventDefault();
            this.setState({[field]: e.currentTarget.value});
        }
    }

    postValid() {
        const { title, body } = this.state;
        return title && body;  
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

        const { formType } = this.props;


        const submitButton = (<button 
                              type='submit'
                              id='post-submit-button'>
                                {formType}
                              </button>)
            
        const button = (<button 
                        type='button'
                        id='post-unsubmittable-button'>
                            {formType}
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

                    {/* <input
                    id='post-image_url' 
                    type='file'>
                    </input> */}

                    <textarea
                    id='post-body' 
                    placeholder='Write your post...'
                    type='text'
                    value={body}
                    onChange={this.update('body')}>
                    </textarea>

                    <div 
                    id='post-form-bottom-buttons-container'
                    className='fixed'>
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
