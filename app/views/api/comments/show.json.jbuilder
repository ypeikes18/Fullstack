json.extract! @comment, :id, :body, :commenter_id, :parent_comment_id, :post_id
json.childComments @comment.child_comments.pluck(:id)
json.commenterName @comment.commenter.name 
json.created_at parse_time_stamp(@comment.created_at)