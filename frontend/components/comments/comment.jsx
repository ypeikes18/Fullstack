import React from 'react';

import CreateCommentContainer from './create_comment_container';
import EditCommentContainer from './edit_comment_container';
import CommentContainer from './comment_container';
import Dropdown from '../dropdowns/dropdown';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment(e) {
        e.preventDefault()

        const { updateComment, comment, fetchComment } = this.props;
        const newComment = Object.assign(
            comment, { body: 'deleted'}
        );
        updateComment(newComment)
        .then(() => fetchComment(comment.id))
    }

    createDropdown() {

        const { isCommenter, 
            comment, 
            selectedComment, 
            receiveSelectedComment,
            replyFormId } = this.props;

        const commentId = comment.id;

        const editButton = (<div 
            className='comment-form-button' 
            type='button'
            key='edit'
            onClick={() => receiveSelectedComment(commentId) }>
                Edit
            </div>);

        const deleteButton = (<div
                    className='comment-form-button' 
                    type='button'
                    key='delete'
                    onClick={this.deleteComment}>
                        Delete
                    </div>);

        if(replyFormId === commentId 
          || !isCommenter 
          || commentId === selectedComment) {
            return null;
        }

        return (< Dropdown options= {[ editButton, deleteButton ]}/>);
    }

    showReplyForm() {
        const { replyFormId, comment } = this.props;
        const commentId = comment.id;

        if(replyFormId === commentId) {
            return (< CreateCommentContainer 
                    parentCommentId={ commentId }/>)
        } else {
            return null;
        }
    } 

    showReplyButton() {
        const { replyFormId, comment, receiveReplyFormId } = this.props;
        const commentId = comment.id;

        if(replyFormId !== commentId) {
            return (<button
                    className='comment-reply-button'
                    type='button'
                    onClick={() => receiveReplyFormId(commentId)}>
                    Reply
                    </button>)
        } else {
            return null;
        }
    }

    createCommentBody() {
        const { comment, selectedComment } = this.props;

        const { body } = comment;
        const commentId = comment.id;

        if(selectedComment === commentId) {
            return (<div className='comment-body-and-buttons'>
                        <EditCommentContainer/>
                    </div>)
        } 

        return(<div className='comment-body-and-buttons'>
                    <p>{body}</p>
                    <div className='comment-buttons-container'>
                        { this.showReplyForm() }
                        { this.createDropdown() }
                        { this.showReplyButton()}                          
                    </div>                                     
                </div>)
    
    }

    render() {
        const { comment, childComments } = this.props;

        if(!comment) return null;

        const { commenterName, created_at } = comment;

        return (
            <div className='comment'>

                <div className='comment-banner-container'>
                    <strong>{commenterName}</strong>
                    <span className='comment-date'>{created_at}</span>
                </div>

                { this.createCommentBody() }

                { childComments.map((comment, i) => (
                            < CommentContainer 
                            comment={comment}
                            key={i}/>
                )) }          
            </div>
        )
    }

}

export default Comment;