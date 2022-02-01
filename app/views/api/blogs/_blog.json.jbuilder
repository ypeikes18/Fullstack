current_user_id = current_user ? current_user.id : nil
blog_id = blog ? blog : nil
subscription = (
    Subscription.find_by(
        subscriber_id: current_user_id,
        blog_id: blog_id)
)
icon_url = (blog.icon_url == '' ? default_blog_icon_url : blog.icon_url)


json.extract! blog, :id, :title, :description, :author_id, :attribution_url
json.icon_url icon_url
json.posts blog.posts.pluck(:id).reverse
json.created_at parse_time_stamp(blog.created_at)
json.author blog.author.name
json.subscriptionId subscription.nil? ? nil : subscription.id