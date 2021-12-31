@users.each do |user|
    json.set! user.id do 
        json.extract! user, :email, :name, :bio, :created_at
    end
end