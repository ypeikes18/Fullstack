class Subscription < ApplicationRecord

    belongs_to :blog,
    foreign_key: :blog_id,
    class_name: :Blog
    
    belongs_to :user,
    foreign_key: :subscriber_id,
    class_name: :User

    validates :blog_id, :subscriber_id, presence: true
    validates :blog_id, uniqueness: { scope: :subscriber_id } 

end
