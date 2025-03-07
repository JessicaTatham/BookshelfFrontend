class CreateBooks < ActiveRecord::Migration[8.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.boolean :favorite
      
      t.timestamps
    end
  end
end
