import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_POSTS = 'RECEIVE_postS';
export const RECEIVE_POST = 'RECEIVE_post';
export const REMOVE_POST = 'REMOVE_post';

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

const receivePost = postId => ({
    type: RECEIVE_POST,
    postId
})

const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const fetchPost = postId => dispatch (
    PostApiUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deletePost = postId => dispatch => (
    PostApiUtil.deletePost(postId)
    .then(post => dispatch(removePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const updatePost = post => dispatch => (
    PostApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const createPost = post => dispatch => (
    PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)