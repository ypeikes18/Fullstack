json.extract! @blog, :id, :title, :description, :icon_url, :author_id, :created_at
json.posts @blog.posts.pluck(:id).reverse