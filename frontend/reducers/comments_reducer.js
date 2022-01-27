import { RECEIVE_COMMENT,
    RECEIVE_COMMENTS,
    REMOVE_COMMENT,
} from '../actions/comment_actions'

const commentsReducer = (prevState = {}, action) => {
Object.freeze(prevState);
const newState = Object.assign({}, prevState)

switch(action.type) {
case RECEIVE_COMMENT:
   newState[action.comment.id] = action.comment;
   return newState;
case RECEIVE_COMMENTS:
   return action.comments;
case REMOVE_COMMENT:
   delete newState[action.commentId]
   return newState;
default:
   return prevState;
}
}

export default commentsReducer;