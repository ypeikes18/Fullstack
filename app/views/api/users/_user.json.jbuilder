json.extract! user, :id, :email, :name, :bio, :created_at
json.blogs user.blogs.pluck(:id)