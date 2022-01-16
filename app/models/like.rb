class Like < ApplicationRecord

    belongs_to :likable, 
    foreign_key: :likable_id,
    polymorphic: true

    validates :likable_id, uniqueness: {
        scope: [:liker_id, :likable_id]
    } 

end

