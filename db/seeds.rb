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
Blog.destroy_all
Post.destroy_all

User.create(name: 'Demo user', email: 'demouser@demouser.com', password: '123456')
scott = User.create(name: 'Scott Alexander', email: 'sa@gmail.com', password: '123456')
blog1 = Blog.create(author_id: scott.id, title: 'SSC', description: 'A cool blog', 
            icon_url: ssc_icon)
            
post1 = Post.create(blog_id: blog1.id, title: 'First SSC Post', 
        subtitle: 'pretty self explanatory', body: 'My first post',
        image_url: image_url)

post2 = Post.create(blog_id: blog1.id, title: 'Second SSC Post', 
        subtitle: 'Also pretty self explanatory', body: 'My second post',
        image_url: image_url)

zvi =  User.create(name: 'Zvi Mowhshowitz', email: 'zvi123456@gmail.com', password: '123456')    

blog2 = Blog.create(author_id: zvi.id, title: "Don't Worry About the Vase", description: 'Trying to dig out from minus a million points', 
        icon_url: 'https://defaultcustomheadersdata.files.wordpress.com/2016/07/city1.jpg?resize=940,198')
