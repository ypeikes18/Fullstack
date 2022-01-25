class Api::PostsController < ApplicationController

    helper Api::PostsHelper

    def show
        @post = Post.find(params[:id])
        if @post
            render :show
        else
            ## not sure if I need the full messages or something else
            render json: @post.errors.full_messages, status: 404
        end    
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post && @post.update(post_params)
            render :show
        else
            if @post 
                render json: @post.errors.full_messages, status: 422
            else
                render json: ['Unable to find blog'] , status: 422
            end
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post
            @post.destroy
            render :show
        else
            render json: ['Post not found'], status: 404
        end
    end

    private

    def post_params
        params.require(:post).permit(:title, :subtitle, :body,
        :image_url, :author_id, :blog_id)
    end
end
