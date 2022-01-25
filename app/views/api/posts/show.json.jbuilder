current_user_id = current_user ? current_user.id : nil
image_url = (@post.image_url == '' ? default_post_image_url : @post.image_url)

json.extract! @post, :id, :title, :subtitle, :body, :blog_id
json.image_url image_url
json.authorId @post.author.id
json.parentComments @post.parent_comments.pluck(:id)
json.created_at parse_time_stamp(@post.created_at)
json.likeId Like.find_like(
    @post.id, 
    current_user_id,
    'Post')