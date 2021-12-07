module Api
    module V1
        class ReviewsController < ApplicationController
            protect_from_forgery with: :null_session
            def create
                review = college.reviews.new(review_params)
                if review.save
                    render json: serializer(review)
                    # render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: {error: review.errors.full_messages}, status: 422
                end
            end

            def destroy
                review = Review.find(params[:id])
                if review.destroy
                    head :no_content
                else
                    render json: {error: review.errors.full_messages}, status: 422
                end
            end
            
            def update
                newreview = College.find_by(id: params[:id])

                if newreview.update(review_params)
                    render json: ReviewSerializer.new(newreview, options).serialized_json
                else
                    render json: {error: newreview.errors.full_messages}, status: 422
                end
            end

            private
            def serializer(records, options = {})
                ReviewSerializer
                  .new(records, options)
                  .serialized_json
              end

            def college
                @college ||= College.find(params[:college_id])
            end
            
            def review_params
                params.require(:review).permit(:title, :description, :score, :college_id)
            end
        end
    end
end