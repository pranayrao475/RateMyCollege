module Api
    module V1
        class CollegesController < ApplicationController
            protect_from_forgery with: :null_session
            def index 
                colleges = College.all
                render json: CollegeSerializer.new(colleges, options).serialized_json
            end
            def show 
               college = College.find_by(slug: params[:slug])
               render json: CollegeSerializer.new(college, options).serialized_json
            end
            # def show
            #     college = College.find_by(slug: params[:slug])
            #     if college
            #         render json: college, status: :ok
            #     else
            #         render json: {error: "college not found"}, status: :not_found
            #     end
            # end
        

            def create
                
                college = College.new(college_params)
                if college.save
                    render json: CollegeSerializer.new(college).serialized_json
                else
                    render json: {error: college.errors.full_messages}, status: 422
                end
            end


            def update
                college = College.find_by(slug: params[:slug])

                if college.update(college_params)
                    render json: CollegeSerializer.new(college, options).serialized_json
                else
                    render json: {error: college.errors.full_messages}, status: 422
                end
            end


            def destroy
            college = College.find_by(slug: params[:slug])

            if college.destroy
                head :no_content 
            else
                render json: {error: college.errors.full_messages}, status: 422
            end
            end

            private
            def college_params
            params.require(:college).permit(:name, :image_url)
            end

            def options 
                @options ||= {include: %i[reviews]}
            end
        end
    end
end