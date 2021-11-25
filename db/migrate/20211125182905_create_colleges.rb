class CreateColleges < ActiveRecord::Migration[6.1]
  def change
    create_table :colleges do |t|
      t.string :name
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
