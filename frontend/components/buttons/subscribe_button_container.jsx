import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SubscribeButton from './subscribe_button';
import { createSubscription, 
         deleteSubscription } from '../../actions/subscription_actions';

const mSTP = state => {
    return {
        userId: state.session.currentUserId
    }
}

const mDTP = dispatch => {
    return {
        createSubscription: subscription => dispatch(createSubscription(subscription)),
        deleteSubscription: subscriptionId => dispatch(deleteSubscription(subscriptionId))
    }
}

export default withRouter(
    connect(mSTP,mDTP)(SubscribeButton)
);