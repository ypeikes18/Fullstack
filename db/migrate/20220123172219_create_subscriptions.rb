class CreateSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.integer :subscriber_id, null: false
      t.integer :blog_id, null: false
      t.timestamps
    end
    add_index :subscriptions, [:subscriber_id, :blog_id], unique: true
  end
end
