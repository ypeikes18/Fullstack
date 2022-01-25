import React from 'react';

//needs to be passed likeable_id and likeable type and 
//like(id or nil) as props from the post or comment
class LikeButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        const { deletePost,
                deleteBlog,
                deleteComment,
                entityType,
                entityId } = this.props;
              
        e.preventDefault();
        
        switch(entityType) {
            case 'post':
                deletePost(entityId);
            case 'comment':
                deleteComment(entityId);
            case 'blog':
                deleteBlog(entityId);
        }
    }

    render() {
        
        return(
            <div 
            className={ `${entityType}-delete-button` }
            onClick={handleDelete}>                
            </div>
        )
    }
}

export default DeleteButton;