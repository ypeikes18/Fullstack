export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}` 
    })
)

export const createUser = user => (
    $.ajax({
        method: 'POST',
        url: `/api/users`,
        data: {user} 
    })
)

// doesn't work yet
export const updateUser = user => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: {user} 
    })
)

export const deleteUser = userId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}` 
    })
)

