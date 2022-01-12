import React from 'react';

import CommentContainer from '.././comments/comment_container';
import CreateCommentContainer from '.././comments/create_comment_container';

class PostShow extends React.Component {

    
    constructor(props) {
        super(props);
        this.CreateCommentContainer = this.createCommentsIndex.bind(this);
    }
    
    componentDidMount() {
        const { fetchPost, match, post } = this.props;
        const postId = match.params.postId;
        if(!post) {
            this.props.fetchPost(postId);
        }
    }

    createCommentsIndex() {
        if(!this.props.post) return null;

        const parentComments = this.props.post.parentComments;

        return parentComments.map((commentId, i) => {
            return (< CommentContainer 
                    commentId={commentId}
                    key={i}/>)
        })
    }

    render() {
        const { post } = this.props;

        if(!post) return null;
        
        const { title, subtitle, body } = post;

        return (
            <div id='post-container'>
                <div id='post-title-container'>
                    <h1 id='post-title'>{title}</h1>
                </div>

                <div id='post-subtitle-container'>
                <h3 id='post-subtitle'>{subtitle}</h3>
                </div>

                <p id='post-body'>{body}</p>

                {< CreateCommentContainer
                 postId={post.id}
                 topLevel={true}
                 parentCommentId={''}/>}
                {this.createCommentsIndex()}
            </div>
        )
    }
}

export default PostShow;


