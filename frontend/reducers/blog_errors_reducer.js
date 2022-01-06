import { RECEIVE_BLOG_ERRORS, 
         RECEIVE_BLOG } 
        from '../actions/blog_actions'

const blogErrorsReducer = (prevState = [], action) => {
    Object.freeze(prevState);
    
    switch(action.type) {
        case RECEIVE_BLOG_ERRORS:
            return action.errors;
        case RECEIVE_BLOG:
            return [];    
        default:
            return prevState;
    }
}

export default blogErrorsReducer;