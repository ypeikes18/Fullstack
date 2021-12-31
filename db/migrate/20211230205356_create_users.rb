class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :name, null: false
      t.text :bio
      t.timestamps
      t.index :email
      t.index :session_token
      t.index :name
    end
  end
end
