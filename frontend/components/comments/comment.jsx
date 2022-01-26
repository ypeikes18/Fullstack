import React from 'react';

import CreateCommentContainer from './create_comment_container';
import EditCommentContainer from './edit_comment_container';
import CommentContainer from './comment_container';
import Dropdown from '../dropdowns/dropdown';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = { editable: this.props.editable };
        this.makeEditable = this.makeEditable.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    // componentDidMount() {        
    //     const { fetchComment, commentId } = this.props;
    //     fetchComment(commentId);
    // }

    makeEditable(e) {
        e.preventDefault()
        this.setState({
            editable: true
        })
    }

    deleteComment() {
        const { updateComment, comment, fetchComment } = this.props;
        const newComment = Object.assign(
            comment, { body: 'deleted'}
        );
        updateComment(newComment)
        .then(() => fetchComment(comment.id))
    }

    render() {
        if(!this.props.comment) return null;

        const { commenterName, 
                body, 
                created_at, 
                id } = this.props.comment;

        const { childComments } = this.props;

        if(this.state.editable) {
            return <EditCommentContainer 
                    commentId={id}/>
        }

        const editButton = (<div 
                            className='comment-form-button' 
                            type='button'
                            onClick={this.makeEditable}>
                                Edit
                            </div>);

        const deleteButton = (<div
                               className='comment-form-button' 
                               type='button'
                               onClick={this.deleteComment}>
                                  Delete
                              </div>);

        const dropdown = (
            < Dropdown
            options=
            {[editButton,
              deleteButton]}/>);

        return (
            <div className='comment'>
                <div className='comment-banner-container'>
                    <strong>{commenterName}</strong>
                    <span className='comment-date'>{created_at}</span>
                </div>
                <p>{body}</p>

            <div className='comment-buttons-container'>
                { < CreateCommentContainer 
                parentCommentId={this.props.comment.id}/>}
                { this.props.isCommenter ? dropdown : null}
            </div>         
                {childComments.map((comment, i) => {
                    return < CommentContainer 
                            comment={comment}
                            key={i}/>
                })}
            </div>
        )
    }

}

export default Comment;