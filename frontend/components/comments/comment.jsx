import React from 'react';

import CreateCommentContainer from './create_comment_container';
import EditCommentContainer from './edit_comment_container';
import CommentContainer from './comment_container';
import ThreeDotsDropdown from '../dropdowns/three_dots_dropdown';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = { editable: this.props.editable };
        this.makeEditable = this.makeEditable.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount() {        
        const { fetchComment, commentId } = this.props;
        fetchComment(commentId);
    }

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
        .then(action => fetchComment(action.comment.id))
    }

    render() {
        if(!this.props.comment) return null;

        const { commenterName, 
                body, 
                created_at, 
                childComments,
                id } = this.props.comment;

        if(this.state.editable) {
            return <EditCommentContainer 
                    commentId={id}/>
        }

        const editButton = (<button 
                            type='button'
                            onClick={this.makeEditable}>
                                Edit
                            </button>);

        const deleteButton = (<button 
                               type='button'
                               onClick={this.deleteComment}>
                                  Delete
                              </button>);

        const dropdown = (
            < ThreeDotsDropdown
            options=
            {[editButton,
              deleteButton]}/>);

        return (
            <div className='comment'>
                <div>
                    <strong>{commenterName}</strong>
                    {}
                    <span>{created_at}</span>
                </div>
                <p>{body}</p>
                
            { < CreateCommentContainer 
                parentCommentId={this.props.comment.id}/>}

            <div className='comment-buttons-container'>
                { this.props.isCommenter ? dropdown : null}
            </div>
            
                {childComments.map((commentId, i) => {
                    return < CommentContainer 
                            commentId={commentId}
                            key={i}/>
                })}
            </div>
        )
    }

}

export default Comment;