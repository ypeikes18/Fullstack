import React from 'react';

//needs to be passed likeable_id and likeable type and 
//like(id or nil) as props from the post or comment
class LikeButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(e) {
        e.preventDefault();
        e.stopPropagation();

        const { createLike,
            deleteLike, 
            userId, 
            likableId, 
            likableType,
            likeId,
            history } = this.props;
              
        debugger
        if(!userId) {
            history.push('/sign-in')
            return
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
        const { likeId, likeCount } = this.props;
        const className = likeId ? 'liked' : 'not-liked';
        return(
            <div className={ className }>
                <div 
                className='heart'
                onClick={this.handleLike}/>

                <span className='like-count'>
                    {likeCount}
                </span>
            </div>
        )
    }
}

export default LikeButton;