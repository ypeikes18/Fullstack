class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.post_comments(params[:post_id])
        if @comments
            render :index
        else
            ## not sure if I need the full messages or something else
            render json: @comments.errors.full_messages, status: 404
        end    
    end
    
    def show
        @comment = Comment.find(params[:id])
        if @comment
            render :show
        else
            ## not sure if I need the full messages or something else
            render json: @comment.errors.full_messages, status: 404
        end    
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment && @comment.update(comment_params)
            render :show
        else
            if @comment 
                render json: @comment.errors.full_messages, status: 422
            else
                render json: ['Unable to find blog'] , status: 422
            end
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
            render :show
        else
            render json: ['Comment not found'], status: 404
        end
    end

    private

    def comment_params
        params
        .require(:comment)
        .permit(
        :body, 
        :commenter_id, 
        :parent_comment_id,
        :post_id)
    end
end
