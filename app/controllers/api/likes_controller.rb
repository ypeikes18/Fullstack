class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like
            @like.destroy
            render :show
        else
            render json: ['Like not found'], status: 404
        end
    end

    private

    def like_params
        params
         .require(:like)
         .permit(:likable_id,:liker_id, :likable_type)
    end

end
