import React from 'react';

class DeleteButton extends React.Component {
    
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
        e.stopPropagation();
        
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
            className={ `${this.props.entityType}-delete-button` }
            onClick={this.handleDelete}>
                Delete                
            </div>
        )
    }
}

export default DeleteButton;