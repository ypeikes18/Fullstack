import React from 'react';

import PostPreviewContainer from './post_preview_container';

class BlogShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { stop: 10 };
    }

    componentDidMount() {
        const blogId = parseInt(this.props.match.params.id);
        this.props.fetchBlog(blogId);
    }

    render() {
        debugger

        const { posts } = this.props.blog;

        const postPreview = (< PostPreviewContainer 
                                latestPost={true} 
                                id={posts[0]}
                                key={posts[0]}/>)

        const postIndex = ( <div>
                        {
                         posts.slice(1).map( postId => (
                         < PostPreviewContainer 
                            id={postId}
                            key={postId}/>)
                         )          
                         }
                        </div> )
        return (
            <div>
                {posts[0] ? postPreview : (<></>)}
                {posts[1] ? postIndex : (<></>)}
            </div>
        )
    }

}

export default BlogShow;



