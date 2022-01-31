import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.createState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.createState = this.createState.bind(this);
    }

    // dynamic for for creating, editing and top level creating comments

    createState() {
        const { type, topLevel, comment } = this.props;
        const state = { show: 'button',
                        comment };

        if(topLevel || type === 'edit') state.show = 'form';

        return state;
    }


    handleSubmit(e) {
        const { comment } = this.state;
        const { removeSelectedComment } = this.props;

        this.toggleForm(e) // changes form back into reply button

        this.props.action(comment)
        .then(() => this.setState( //clears state 
            this.createState()
        ))
        .then(() => removeSelectedComment())
    }

    //when reply is clicked this changes state so reply form renders
    toggleForm(e) {  
        const { comment } = this.props;      
        e.preventDefault();
        const value = (
            this.state.show === 'button' ? 'form' : 'button');
        this.setState({
            show: value,
            comment
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

    createCancelButton() {
        const { topLevel, type, removeSelectedComment } = this.props;

        if(topLevel) return null;
      
        let action;
        if(type === 'edit') {
            action = () => removeSelectedComment(); 
        } else {
            action = this.toggleForm;
        }  
            
        return (
            <button
            type='button'
            className='comment-cancel-button'
            onClick={action}>
                cancel
            </button>
        )       
    }
    
    render() {
        const buttons = (<div className='comment-form-reply-container'>
                            <button
                            className='comment-reply-button'
                            type='button'
                            onClick={this.toggleForm}>
                            Reply
                            </button>
                        </div>);

        const form = (<form 
                        onSubmit={this.handleSubmit}
                        className='comment-form'>

                            <textarea
                            className='comment-body-field'
                            placeholder='write a comment...'
                            value={this.state.comment.body}
                            onChange={this.update('body')}/>

                            <div className='comment-form-button-container'>
                                <button
                                type='submit'
                                className='comment-submit-button'>
                                    Post
                                </button>
                                {this.createCancelButton()}
                            </div>
                        </form>)

        return (<div className='comment-form-container'>
                    {this.state.show === 'form' ? form : buttons}    
                </div>)
        
    }
}

export default CommentForm;