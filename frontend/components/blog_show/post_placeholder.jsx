import React from 'react';
import { comingSoonPhoto } from '../../util/urls';

const PostPlaceholder = (props) => {
    return (
        <div id='latest-post-preview'>
            <div className='latest-post-preview-image-container'>
                <img src={ window.comingSoonPhoto }/>
            </div>
            <div className='latest-post-preview-content-container'>
                <div className='post-preview-text'>
                                <h1>This blog does not have any posts</h1>
                                <span>Check back soon</span>
                        </div>

                </div>
        </div>  
    )
}

export default PostPlaceholder;