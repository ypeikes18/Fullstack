class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :commenter_id, null: false
      t.integer :parent_comment_id
      t.timestamps
      t.index :commenter_id
      t.index :parent_comment_id
    end
  end
end
