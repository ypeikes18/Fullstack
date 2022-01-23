json.extract! @post, :id, :title, :subtitle, :body, :image_url, :blog_id
json.authorId @post.author.id
json.parentComments @post.parent_comments.pluck(:id)
json.created_at parse_time_stamp(@post.created_at)
json.liked Like.is_liked?(@post.id, current_user.id)