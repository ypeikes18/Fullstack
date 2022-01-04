json.extract! user, :id, :email, :name, :bio, :created_at
json.users_blogs user.blogs.pluck(:id)