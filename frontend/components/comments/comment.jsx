import React from 'react';

import CommentContainer from './comment_container';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchComment, commentId } = this.props;

        fetchComment(commentId);
    }

    render() {
        if(!this.props.comment) return null;

        const { commenterName, body, created_at, childComments } = this.props.comment;
        return (
            <div className='comment'>
                <div>
                    <span>{commenterName}</span>
                    <span>{created_at}</span>
                </div>
                <p>{body}</p>
                
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