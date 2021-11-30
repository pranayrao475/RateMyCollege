class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :college_id
end
