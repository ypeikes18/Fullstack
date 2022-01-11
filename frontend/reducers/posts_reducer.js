import { RECEIVE_POST,
        RECEIVE_POSTS,
        REMOVE_POST,
   } from '../actions/post_actions'

const postsReducer = (prevState = {}, action) => {
Object.freeze(prevState);
const newState = Object.assign({}, prevState)

switch(action.type) {
   case RECEIVE_POST:
       newState[action.post.id] = action.post;
       return newState;
   case RECEIVE_POSTS:
       return Object.assign(newState, action.posts);
   case REMOVE_POST:
       delete newState[action.postId]
       return newState;
   default:
       return prevState;
}
}

export default postsReducer;