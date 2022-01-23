export const createSubscription = subscription => {
    return ($.ajax({
        method: 'POST',
        url: `/api/subscriptions`,
        data: { subscription }
    }))
}

export const deleteSubscription = subscriptionId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/subscriptions/${subscriptionId}`
    })
)