import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../../actions/post_actions';

class PostPreview extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {

        const { latestPost, post, postId } = this.props;

        if(!post) return null;

        const { title, 
                subtitle, 
                created_at, 
                blogId } = post;


        const img = (<img src={post.image_url}/>);

        const text = ( <div id='post-preview-text'>
                             <h1>{ title }</h1>
                             <span>{ subtitle }</span>
                             <div>
                                 {created_at}
                                 {<Link to={`/blogs/i/${blogId}/posts/${postId}/edit`}/>}
                             </div>
                       </div>);
       
        return (<Link 
                 to={`/blogs/i/${blogId}/posts/${postId}`}>
                    {latestPost ? (
                    <div id='latest-post-preview'>
                        {img}{text}
                    </div>
                    ) : (text)}
                </Link>
        )
            
    }
}

const mSTP = (state, ownProps) => {
    return { post: state.entities.posts[ownProps.postId] }
}

const mDTP = dispatch => {
    return {
    fetchPost: postId => dispatch(fetchPost(postId))    
    }
}

export default connect(mSTP, mDTP)(PostPreview);