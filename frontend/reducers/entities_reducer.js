import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import blogsReducer from "./blogs_reducer";
import postsReducer from "./posts_reducer";
import commentsReducer from "./comments_reducer";



const entitiesReducer = combineReducers({
    users: usersReducer,
    blogs: blogsReducer,
    posts: postsReducer,
    comments: commentsReducer
});

export default entitiesReducer;