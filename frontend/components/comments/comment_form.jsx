import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.createState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.createState = this.createState.bind(this)
    }

    createState() {
        const { type, topLevel } = this.props;
        const state = { show: 'button',
                        comment: this.props.comment };

        if(topLevel || type === 'edit') state.show = 'form';

        return state;
    }

    componentDidMount() {
        const { fetchComment, type, commentId } = this.props;
        if(type === 'edit') {
            fetchComment(commentId)
        }
    }

    handleSubmit(e) {
        const { fetchComment } = this.props; 
        const { comment } = this.state;

        this.handleClick(e)

        this.props.action(comment)
        .then(action => (
            fetchComment(action.comment.parent_comment_id)))
        .then(() => this.setState(
            this.createState())
        )
    
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

    createCancelButton() {

        if(this.props.topLevel){
            return null;
        } else {
            const action = this.props.type === 'create' ? (
                this.handleClick) : (
                this.handleSubmit);
                
            return (
                <button
                type='button'
                className='comment-cancel-button'
                onClick={action}>
                    cancel
                </button>
            )
        }
    }
    
    render() {

        const buttons = (<button
                        className='comment-reply-button'
                        type='button'
                        onClick={this.handleClick}>
                          Reply
                        </button>);

        const form = (<form 
                        onSubmit={this.handleSubmit}
                        className='comment-form'>

                            <textarea
                            className='comment-body-field'
                            placeholder='write a comment...'
                            value={this.state.comment.body}
                            onChange={this.update('body')}/>

                            <button
                            type='submit'
                            className='comment-submit-button'>
                                Post
                            </button>

                            {this.createCancelButton()}
                        </form>)

        return (<div className='comment-form-container'>
                    {this.state.show === 'form' ? form : buttons}    
                </div>)
        
    }
}

export default CommentForm;