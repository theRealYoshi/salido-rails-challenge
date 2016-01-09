class Wine < ActiveRecord::Base
  validates :wine_id, presence: true
end
