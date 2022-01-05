class Blog < ApplicationRecord

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

    has_many :posts,
    foreign_key: :blog_id,
    class_name: :Post

    validates :author_id, :title, :description, presence: true
    validates :title, uniqueness: {scope: [:author_id]}


end
