import React from 'react';

import CommentContainer from '.././comments/comment_container';

class PostShow extends React.Component {

    componentDidMount() {
        const { fetchPost, match, post } = this.props;
        const postId = match.params.postId;
        if(!post) {
            this.props.fetchPost(postId);
        }
    }

    render() {
        const { post } = this.props;
        if(!post) return null;
        
        const { title, subtitle, body, parentComments } = post;

        const commentsIndex = parentComments ? (
            parentComments.map((commentId, i) => {
                return < CommentContainer 
                        commentId={commentId}
                        key={i}/>
            })) : (null)
        

        return (
            <div id='post-container'>
                <div id='post-title-container'>
                    <h1 id='post-title'>{title}</h1>
                </div>

                <div id='post-subtitle-container'>
                <h3 id='post-subtitle'>{subtitle}</h3>
                </div>

                <p id='post-body'>{body}</p>
                {commentsIndex}
            </div>
        )
    }
}

export default PostShow;


