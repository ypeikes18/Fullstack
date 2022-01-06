import React from 'react';

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
        
        const { title, subtitle, body } = post;
        return (
            <div>
                <h1 id='post-title'>{title}</h1>
                <h3 id='post-subtitle'>{subtitle}</h3>
                <p id='post-body'>{body}</p>
            </div>
        )
    }
}

export default PostShow;


