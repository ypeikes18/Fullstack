class AddAttribution < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :attribution_url, :string
  end
end
