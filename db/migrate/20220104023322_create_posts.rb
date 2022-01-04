class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :blog_id, null: false
      t.string :title, null: false, limit: 200
      t.string :subtitle, limit: 200
      t.string :body, null: false
      t.string :image_url
      t.timestamps
      t.index :title
      t.index :author_id
      t.index :blog_id
    end
  end
end
