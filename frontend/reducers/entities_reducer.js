import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import blogsReducer from "./blogs_reducer";
import postReducer from "./posts_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    blogs: blogsReducer,
    posts: postReducer
});

export default entitiesReducer;