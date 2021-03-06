class Post < ApplicationRecord

    belongs_to :blog,
    foreign_key: :blog_id,
    class_name: :Blog

    has_one :author, through: :blog, foreign_key: :author_id

    has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment

    has_many :likes, as: :likable


    def parent_comments
        Comment
            .where('parent_comment_id IS NULL')
            .where("post_id = #{self.id}")
    end

end
