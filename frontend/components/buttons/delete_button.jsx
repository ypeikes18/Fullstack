import React from 'react';
import { withRouter } from 'react-router-dom';

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
                entityId,
                history, 
                match } = this.props;
              
        e.preventDefault();
        e.stopPropagation();
        
        switch(entityType) {
            case 'post':
                const { blogId } = match.params
                deletePost(entityId);
                history.push(`/blogs/${blogId}`)
            case 'comment':
                deleteComment(entityId);
            case 'blog':
                deleteBlog(entityId);
                history.push('/')
                
        }
    }

    render() {
        
        return(
            <div 
            className={ `${this.props.entityType}-delete-button delete-button` }
            onClick={this.handleDelete}>
                Delete                
            </div>
        )
    }
}

export default withRouter(DeleteButton);