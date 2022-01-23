import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const fetchPost = postId => dispatch => (
    PostApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
)

export const deletePost = postId => dispatch => (
    PostApiUtil.deletePost(postId)
    .then(post => dispatch(removePost(post.id)))
)

export const updatePost = post => dispatch => (
    PostApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
)

export const createPost = post => dispatch => (
    PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
)