class Blog < ApplicationRecord

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_many :posts,
    foreign_key: :blog_id,
    class_name: :Post

    has_many :subscriptions,
    foreign_key: :blog_id,
    class_name: :Subscription

    validates :author_id, :title, :description, presence: true
    validates :title, uniqueness: {scope: [:author_id]}

    def self.search(string)
        string = "%#{string.upcase}%"
        Blog
          .joins(:author)
          .where('upper(title) LIKE ? OR upper(users.name) LIKE ?', string, string)
          .limit(10)
    end

end
