class Api::BlogsController < ApplicationController

    helper Api::PostsHelper

    def index
        case params[:type]
            when 'search'
                @blogs = Blog.find_topic(params[:string])
            when 'subscribed' 
                @blogs = current_user.subscribed_blogs
            when 'authored'
                @blogs = current_user.blogs
            when 'featured'
                @blogs = Blog.all.sample(6)
        end
        render :index
    end
    
    def show
        @blog = Blog.find(params[:id])
        if @blog
            render :show
        else
            ## not sure if I need the full messages or something else
            render json: @blog.errors.full_messages, status: 404
        end    
    end

    def create
        @blog = Blog.new(blog_params)
        if @blog.save
            render :show
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end

    def update
        @blog = Blog.find(params[:id])
        if @blog && @blog.update(blog_params)
            render :show
        else
            if @blog 
                render :show
            else
                render json: ['Unable to find blog'] , status: 422
            end
        end
    end

    def destroy
        @blog = Blog.find(params[:id])
        if @blog
            @blog.destroy
            render :show
        else
            render json: ['Blog not found'], status: 404
        end
    end

    private 

    def blog_params
        params.require(:blog).permit(:id, :author_id, :title, :description, :icon_url)
    end
    
end
