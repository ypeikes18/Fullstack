class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.integer :author_id, null: false
      t.string :title, null: false, limit: 60
      t.string :description, null: false, limit: 255
      t.string :icon_url
      t.timestamps
      t.index :title
      t.index :author_id
      t.index [:author_id, :title], unique: true
    end
  end
end
