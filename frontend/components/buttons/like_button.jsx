import React from 'react';

//needs to be passed likeable_id and likeable type and 
//like(id or nil) as props from the post or comment
class LikeButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(e) {
        const { createLike,
            deleteLike, 
            userId, 
            likableId, 
            likableType,
            likeId,
            history } = this.props;
              
        e.preventDefault();
        e.stopPropagation();

        if(!userId) {
            history.push('./sign-in')
        }
        
        if(!likeId) {
            createLike({
                likable_id: likableId,
                liker_id: userId, 
                likable_type: likableType
            })
        } else {
            deleteLike(likeId)
        }
    }

    render() {
        const { likeId } = this.props;
        const className = likeId ? 'liked' : 'not-liked';
        return(
            <div className={ className }>
                <div 
                className='heart'
                onClick={this.handleLike}/>
            </div>
        )
    }
}

export default LikeButton;