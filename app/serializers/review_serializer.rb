class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :collge_id
end
