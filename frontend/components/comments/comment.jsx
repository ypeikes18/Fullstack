import React from 'react';

import CreateCommentContainer from './create_comment_container';
import EditCommentContainer from './edit_comment_container';
import CommentContainer from './comment_container';
import Dropdown from '../dropdowns/dropdown';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.makeEditable = this.makeEditable.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.state = { status: 'comment'}
    }

    makeEditable(e) {
        const { receiveSelectedComment, comment } = this.props;
        e.preventDefault();
        this.setState({
            status: (this.state.status === 'comment' ? 'reply' : 'comment') 
        })
        receiveSelectedComment(comment.id);
    }

    deleteComment() {
        const { updateComment, comment, fetchComment } = this.props;
        const newComment = Object.assign(
            comment, { body: 'deleted'}
        );
        updateComment(newComment)
        .then(() => fetchComment(comment.id))
    }

    createDropdown() {

        const { isCommenter, comment, selectedComment } = this.props;

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
        if(this.state.status === 'reply' || 
        !isCommenter || 
        comment.id === selectedComment) return null;

        return (< Dropdown
                options=
                {[editButton,
                deleteButton]}/>);
    }

    render() {
        const { comment, 
                selectedComment, 
                childComments } = this.props;
        if(!comment) return null;

        const { commenterName, 
                body, 
                created_at, 
                id } = comment;
        
        let commentBody;        
        if(selectedComment === id) {
            commentBody = ( <div className='comment-body-and-buttons'>
                                    <EditCommentContainer/>
                            </div> )
        } else {
            commentBody = (<div className='comment-body-and-buttons'>
                                <p>{body}</p>

                                <div className='comment-buttons-container'>
                                    
                                    { < CreateCommentContainer 
                                    parentCommentId={ id }/>}
                                    { this.createDropdown() }
                                    
                                </div>         
                
                            </div>)
        }

        return (
            <div className='comment'>
                <div className='comment-banner-container'>
                    <strong>{commenterName}</strong>
                    <span className='comment-date'>{created_at}</span>
                </div>

                { commentBody }
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