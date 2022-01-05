class Post < ApplicationRecord

    belongs_to :blog,
    foreign_key: :blog_id,
    class_name: :Blog

    has_one :author, through: :blogs, foreign_key: :author_id

end
