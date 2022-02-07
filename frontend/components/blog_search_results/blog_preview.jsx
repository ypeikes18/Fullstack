import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import DeleteButtonContainer from '../buttons/delete_button_container';
import DropDown from '../dropdowns/dropdown';


class BlogPreview extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { history, blog } = this.props;
        history.push(`/blogs/${blog.id}`)
    }

    createDropdown() {
        const { blog, currentUserId} = this.props;
        
        if(currentUserId === blog.author_id) {
            return (
                <DropDown 
                options={
                    [
                    (<DeleteButtonContainer
                    entityType='blog'
                    entityId={blog.id}/>),
            
                    (<Link to={`/blogs/${blog.id}/edit`}>
                        Edit
                    </Link>)                               
                    ]} 
                />)
        }     
    }


    render() {
        const { id,
            title, 
            author, 
            icon_url, 
            description } = this.props.blog;

        return(
                <div
                onClick={this.handleClick} 
                className='blog-preview-container'>
                    <div className='blog-preview-image-container'> 
                        <img 
                        src={icon_url}
                        className='blog-preview-image'/>
                    </div>
    
                    <div className='blog-preview-text'>
                        <h1 className='blog-preview-title'>{title}</h1>
                        <p className='blog-preview-description'>{description}</p>
                        <span className='blog-preview-details'>
                            {`By ${author}`}
                        </span>
                    </div>
                    {this.createDropdown()}
                </div>
        )
    }

}

const mSTP = state => {
    return {
        currentUserId: state.session.currentUserId
    }
}



export default withRouter(
    connect(mSTP, null)(BlogPreview)
);