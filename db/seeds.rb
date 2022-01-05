# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ssc_icon = 'https://cdn.substack.com/image/fetch/w_96,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F430241cb-ade5-4316-b1c9-6e3fe6e63e5e_256x256.png'
image_url = 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
User.destroy_all
User.create(name: 'Demo user', email: 'demouser@demouser.com', password: '123456')
scott = User.create(name: 'Scott Alexander', email: 'sa@gmail.com', password: '123456')
post1 = Blog.create(author_id: scott.id, title: 'SSC', description: 'A cool blog', 
            icon_url: ssc_icon)
Post.create(blog_id: post1.id, title: 'First SSC Post', 
    subtitle: 'pretty self explanatory', body: 'My first post',
    image_url: image_url)
