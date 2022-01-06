import * as BlogApiUtil from '../util/blog_api_util';

export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const REMOVE_BLOG = 'REMOVE_BLOG';
export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';

const receiveBlogs = blogs => ({
    type: RECEIVE_BLOGS,
    blogs
})

const receiveBlog = blog => ({
    type: RECEIVE_BLOG,
    blog
})

const removeBlog = blogId => ({
    type: REMOVE_BLOG,
    blogId
})

const receiveErrors = errors => {
    return {
        type: RECEIVE_BLOG_ERRORS,
        errors
    }
}


export const fetchBlog = blogId => dispatch => {
    return BlogApiUtil.fetchBlog(blogId)
    .then(blog => dispatch(receiveBlog(blog)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteBlog = blogId => dispatch => (
    BlogApiUtil.deleteBlog(blogId)
    .then(blog => dispatch(removeBlog(blog)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const updateBlog = blog => dispatch => (
    BlogApiUtil.updateBlog(blog)
    .then(blog => dispatch(receiveBlog(blog)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const createBlog = blog => dispatch => {

    return BlogApiUtil.createBlog(blog)
    .then(blog => dispatch(receiveBlog(blog)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}



