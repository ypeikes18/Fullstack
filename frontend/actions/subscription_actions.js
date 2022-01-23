import * as SubscriptionApiUtil from '../util/subscription_api_util';
import { fetchBlog } from './blog_actions';

export const createSubscription = subscription => dispatch => {
    return SubscriptionApiUtil.createSubscription(subscription)
        .then(subscription => {
            const { blog_id } = subscription.extract; 
            dispatch(fetchBlog(blog_id));
        })
}

export const deleteSubscription = subscriptionId => dispatch => {
    return SubscriptionApiUtil.deleteSubscription(subscriptionId)
        .then(subscription => {
            const { blog_id } = subscription.extract; 
            dispatch(fetchBlog(blog_id));
        })
}