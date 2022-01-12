import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: 'button',
                       comment: this.props.comment };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { fetchComment, type, commentId } = this.props;
        if(type === 'edit') {
            fetchComment(commentId)
        }
    }

    handleSubmit(e) {
        this.handleClick(e)
        this.props.action(this.state.comment);
    }

    handleClick(e) {
        e.preventDefault();
        const value = (
            this.state.show === 'button' ? 'form' : 'button');

        this.setState({
            show: value
        })
    }

    update(field) {
        return (e) => {
            const newComment = Object.assign({}, this.state.comment);
            newComment[field] = e.currentTarget.value;
            
            this.setState({
                comment: newComment
            })
        }
    }
    
    render() {

        const button = (<button
                        className='comment-reply-button'
                        type='button'
                        onClick={this.handleClick}>
                          Reply
                        </button>);

        const form = (  <div className='comment-form-container'>
                            <form 
                            onSubmit={this.handleSubmit}
                            className='comment-form'>

                                <textarea
                                className='comment-body-field'
                                placeholder='write a comment...'
                                onChange={this.update('body')}/>

                                <button
                                type='submit'
                                className='comment-submit-button'>
                                    Post
                                </button>

                                <button
                                type='button'
                                className='comment-cancel-button'
                                onClick={this.handleClick}>
                                    cancel
                                </button>

                            </form>
                        </div>)
        return (<div>
                    {this.state.show === 'form' ? form : button}    
                </div>)
        
    }
}

export default CommentForm;