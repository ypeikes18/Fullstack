import React from 'react';

import CreateCommentContainer from './create_comment_container';
import EditCommentContainer from './edit_comment_container';
import CommentContainer from './comment_container';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = { editable: this.props.editable };
        this.makeEditable = this.makeEditable.bind(this);
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

        const dropdown = (
            <div className="dropdown-container" tabIndex="-1">
                <div className="three-dots"></div>
            <div className="dropdown">
                <button 
                type='button'
                onClick={() => this.props.deleteComment(id)}>
                    Delete
                </button>

                <button 
                type='button'
                onClick={this.makeEditable}>
                    Edit
                </button>
            </div>
        </div>
        );

        return (
            <div className='comment'>
                <div>
                    <strong>{commenterName}</strong>
                    {}
                    <span>{created_at}</span>
                </div>
                <p>{body}</p>

            <div className='comment-buttons-container'>
                { < CreateCommentContainer 
                    parentCommentId={this.props.comment.id}/>}
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