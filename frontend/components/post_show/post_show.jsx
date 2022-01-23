import React from 'react';

import CommentContainer from '.././comments/comment_container';
import CreateCommentContainer from '.././comments/create_comment_container';
import LikeButtonContainer from '../buttons/like_button_container';

class PostShow extends React.Component {

    constructor(props) {
        super(props);
        this.CreateCommentContainer = this.createCommentsIndex.bind(this);
    }
    
    componentDidMount() {
        const { fetchPost, match, post } = this.props;
        const postId = match.params.postId;
        if(!post) {
            fetchPost(postId);
        }
    }

    createCommentsIndex() {
        if(!this.props.post) return null;

        const { parentComments } = this.props.post;

        return parentComments.map((commentId, i) => {
            return (< CommentContainer 
                    commentId={commentId}
                    key={i}/>)
        })
    }

    render() {
        const { post } = this.props;

        if(!post) return null;
        
        const { title, subtitle, body, id, likeId } = post;

        return (
            <div id='post-content-section'>
                <div id='post-container'>
                    <div id='post-title-container'>
                        <h1 id='post-title'>{ title }</h1>
                    </div>

                    <div id='post-subtitle-container'>
                    <h3 id='post-subtitle'>{subtitle}</h3>
                    </div>

                    <LikeButtonContainer
                        likableType='Post'
                        likableId={ id }
                        likeId={ likeId }/>

                    <div id='post-body-container'>
                        <p id='post-body'>{body}</p>
                    </div>
                </div>

                <div id='comments-section'>
                    <div id='comments-container'>
                        <span id='comments-container-banner-text'>
                            Discussion
                        </span>
                        {< CreateCommentContainer
                        postId={post.id}
                        topLevel={true}
                        parentCommentId={''}/>}
                        {this.createCommentsIndex()}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostShow;


