class Like < ApplicationRecord

    belongs_to :likable, 
    foreign_key: :likable_id,
    polymorphic: true

    validates :likable_id, uniqueness: {
        scope: [:liker_id, :likable_id]
    }
    
    def self.find_like(likable_id, user_id, likable_type)
        like = Like.find_by(
            likable_id: likable_id,
            liker_id: user_id,
            likable_type: likable_type)
        return (like ? like.id : nil)
    end

end

