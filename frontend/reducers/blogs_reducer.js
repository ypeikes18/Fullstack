import { RECEIVE_BLOG,
         RECEIVE_BLOGS,
         REMOVE_BLOG,
        } from '../actions/blog_actions'

const blogReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    const newState = Object.assign({}, prevState)
    switch(action.type) {
        case RECEIVE_BLOG:
            newState[action.blog.id] = action.blog;
            return newState;
        case RECEIVE_BLOGS:
            return Object.assign(newState, action.blogs);
        case REMOVE_BLOG:
            delete newState[action.blogId]
            return newState;
        default:
            return prevState;
    }
}

export default blogReducer;