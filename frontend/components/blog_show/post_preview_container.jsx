import React from 'react';
import { connect } from 'react-redux';

class PostPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
    }

    componentDidMount() {
        this.state = this.props.fetchPost(this.props.id);
    }

    render() {
        const img = (<div id='latest-post-image-container'>
                        <img src={''}/>
                    </div>);

        const text = ( <div id='post-preview-text'>
                          <h1>{ title }</h1>
                          <span>{ subtitle }</span>
                       </div>);

        const { title, subtitle } = this.state;

        return (
            this.props.latestPost ? (
                <div>{img}{text}</div>) : (text)
        )
            
    }
}

const mSTP = () => ({});

const mDTP = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId))    
})

export default connect(mSTP, mDTP)(PostPreview);