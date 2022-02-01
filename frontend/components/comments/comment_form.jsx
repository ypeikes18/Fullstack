import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    resetState() {
        const { removeSelectedComment,
                removeReplyFormId,
                comment, 
                type } = this.props;
        this.setState(comment);

        if(type === 'edit') {
            removeSelectedComment(); 
        } else {
            removeReplyFormId();
        }  
    }


    handleSubmit(e) {
        e.preventDefault()
        const comment = this.state;
        const { action } = this.props;

        action(comment)
            .then(() => this.resetState())
    }

    update(field) {
        return (e) => {
            e.preventDefault()
            const newComment = Object.assign({}, this.state);
            newComment[field] = e.currentTarget.value;
            
            this.setState(newComment)
        }
    }

    cancelButton() {
        const { topLevel } = this.props;

        if(topLevel) return null;  
            
        return (
            <button
            type='button'
            className='comment-cancel-button'
            onClick={() => this.resetState()}>
                cancel
            </button>
        )       
    }
    
    render() {
        return (<div className='comment-form-container'>
                    <form 
                    onSubmit={this.handleSubmit}
                    className='comment-form'>

                        <textarea
                        className='comment-body-field'
                        placeholder='write a comment...'
                        value={this.state.body}
                        onChange={this.update('body')}/>

                        <div className='comment-form-button-container'>
                            <button
                            type='submit'
                            className='comment-submit-button'>
                                Post
                            </button>

                            {this.cancelButton()}
                        </div>

                    </form>
                </div>)       
    }
}

export default CommentForm;