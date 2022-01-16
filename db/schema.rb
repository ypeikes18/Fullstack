# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_15_235844) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blogs", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "title", limit: 60, null: false
    t.string "description", limit: 255, null: false
    t.string "icon_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_id", "title"], name: "index_blogs_on_author_id_and_title", unique: true
    t.index ["author_id"], name: "index_blogs_on_author_id"
    t.index ["title"], name: "index_blogs_on_title"
  end

  create_table "comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "commenter_id", null: false
    t.integer "parent_comment_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "post_id", null: false
    t.index ["commenter_id"], name: "index_comments_on_commenter_id"
    t.index ["parent_comment_id"], name: "index_comments_on_parent_comment_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "likable_id", null: false
    t.integer "liker_id", null: false
    t.string "likable_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["likable_type", "likable_id"], name: "index_likes_on_likable_type_and_likable_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "blog_id", null: false
    t.string "title", limit: 200, null: false
    t.string "subtitle", limit: 200
    t.text "body", null: false
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["blog_id"], name: "index_posts_on_blog_id"
    t.index ["title"], name: "index_posts_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "name", null: false
    t.text "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["name"], name: "index_users_on_name"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
