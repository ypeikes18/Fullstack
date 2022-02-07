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
bryan = User.create(name: 'Bryan Caplan', email: 'bc@gmail.com', password: '123456')
zvi =  User.create(name: 'Zvi Mowshowitz', email: 'zm@gmail.com', password: '123456')    
scott =  User.create(name: 'Scott Aaronson', email: 'sa@gmail.com', password: '123456') 
steven =  User.create(name: 'Steven Hayes', email: 'sh@gmail.com', password: '123456')    



blog1 = Blog.create(
        author_id: bryan.id, 
        title: "Brian Caplan's Early Writings", 
        description: "Brian Caplan's early writings on economics, philosophy, and political theory",
        attribution_url: 'https://econfaculty.gmu.edu/bcaplan/early.html'
)
            
blog2 = Blog.create(
        author_id: zvi.id, 
        title: "Don't Worry About the Vase", 
        description: 'Trying to dig out from minus a million points', 
        icon_url: 'https://defaultcustomheadersdata.files.wordpress.com/2016/07/city1.jpg?resize=940,198',
        attribution_url: 'https://thezvi.wordpress.com/'
)

blog3 = Blog.create(
        author_id: scott.id, 
        title: "Shtetl Optimized", 
        description: "If you take nothing else from this blog: quantum computers won't
        solve hard problems instantly by just trying all solutions in parallel. \n Also, next pandemic, let's approve the vaccines faster!", 
        icon_url: 'https://defaultcustomheadersdata.files.wordpress.com/2016/07/city1.jpg?resize=940,198',
        attribution_url: 'https://scottaaronson.blog/'
)

