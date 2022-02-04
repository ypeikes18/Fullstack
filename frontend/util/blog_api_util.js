export const fetchBlog = blogId => {
    return ($.ajax({
        method: 'GET',
        url: `/api/blogs/${blogId}`
    }))
}

export const fetchBlogs = (type, string) => {
    return ($.ajax({
        method: 'GET',
        url: `/api/blogs`,
        data: { type, string }
    }))
}


export const createBlog = blog => {
    return ($.ajax({
        method: 'POST',
        url: `/api/blogs`,
        data: { blog }
    }))
}



export const updateBlog = blog => (
    $.ajax({
        method: 'PATCH',
        url: `/api/blogs/${blog.id}`,
        data: { blog }
    })
)

export const deleteBlog = blogId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/blogs/${blogId}`
    })
)
