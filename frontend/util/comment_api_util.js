export const fetchComment = commentId => {
    return ($.ajax({
        method: 'GET',
        url: `/api/comments/${commentId}`
    }))
}

export const fetchComments = postId => {
    return ($.ajax({
        method: 'GET',
        url: `/api/comments`,
        data: { post_id: postId }
    }))
}

export const createComment = comment => {
    return ($.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: { comment }
    }))
}

export const updateComment = comment => (
    $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
)

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
)