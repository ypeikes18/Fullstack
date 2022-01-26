class Comment < ApplicationRecord

    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

    belongs_to :parent_comment,
    foreign_key: :parent_comment_id,
    class_name: :Comment,
    optional: true

    belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User

    has_many :child_comments,
    foreign_key: :parent_comment_id,
    class_name: :Comment

    has_many :likes, as: :likable

    def self.post_comments(post_id) 
        Comment
          .where(post_id: post_id)
    end

end
