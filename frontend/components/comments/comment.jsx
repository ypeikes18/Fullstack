import React from 'react';

import CreateCommentContainer from './create_comment_container';
import CommentContainer from './comment_container';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    componentDidMount() {        
        const { fetchComment, commentId } = this.props;
        fetchComment(commentId);
    }

    render() {
        if(!this.props.comment) return null;

        const { commenterName, 
                body, 
                created_at, 
                childComments } = this.props.comment;

        return (
            <div className='comment'>
                <div>
                    <strong>{commenterName}</strong>
                    {}
                    <span>{created_at}</span>
                </div>
                <p>{body}</p>

                {/* <div class="dropdown-container" tabindex="-1">
                    <div class="three-dots"></div>
                    <div class="dropdown">
                        <a href="#">Edit</a>
                        <a href="#">Delete</a>
                    </div>
                </div> */}

                { < CreateCommentContainer 
                    parentCommentId={this.props.comment.id}/>}

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