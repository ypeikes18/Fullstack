class Post < ApplicationRecord

    belongs_to :blog,
    foreign_key: :blog_id,
    class_name: :Blog

    belongs_to: :author,
    foreign_key: :author_id,
    class_name: :User


end
