json.extract! blog, :id, :title, :description, :icon_url, :author_id
json.posts blog.posts.pluck(:id).reverse
json.created_at parse_time_stamp(blog.created_at)
json.author blog.author.name