json.extract @blog, :id, :title, :description, :icon_url, :created_at
json.posts @blog.posts.pluck(:id).reverse