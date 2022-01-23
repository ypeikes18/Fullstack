class Like < ApplicationRecord

    belongs_to :likable, 
    foreign_key: :likable_id,
    polymorphic: true

    validates :likable_id, uniqueness: {
        scope: [:liker_id, :likable_id]
    }
    
    def self.is_liked?(likable_id, user_id)
        !!Like.find_by(
            likable_id: likable_id,
            liker_id: user_id)
    end

end

