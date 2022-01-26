import React from 'react';

//needs to be passed blogId_id and likeId as props 
class SubscribeButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    handleSubscribe(e) {
        e.preventDefault();

        const { userId,
            subscriptionId,
            deleteSubscription, 
            createSubscription, 
            blogId,
            history } = this.props;

        if(!userId) {
            history.push('/sign-in')
        }
        
        if(!subscriptionId) {
            createSubscription({
                subscriber_id: userId, 
                blog_id: blogId
            })
        } else {
            deleteSubscription(subscriptionId)
        }
    }

    render() {
        const { subscriptionId, userId } = this.props;
        let className; 
        if(userId){
            className = subscriptionId ? 'Unsubscribe' : 'Subscribe';
        } else {
            className = 'Subscribe';
        }

        return(
                <button 
                className={ className }
                onClick={this.handleSubscribe}>
                { className }
                </button>
        )
    }
}

export default SubscribeButton;