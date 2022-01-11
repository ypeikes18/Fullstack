class AddPostId < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :post_id, :integer, null: false
  end
end
