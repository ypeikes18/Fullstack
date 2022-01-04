class Blog < ApplicationRecord

    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

    validates :author_id, :title, :description, presence: true
    validates :title, uniqueness: {scope: [:author_id]}

end
