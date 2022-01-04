class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end
    
    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            ## not sure if I need the full messages or something else
            render json: @user.errors.full_messages, status: 404
        end    
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            ## not sure if I need the full messages or something else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: user_params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            ## not sure if I need the full messages or something else
            if @user 
                render json: @user.errors.full_messages, status: 422
            else
                render json: ['Unable to find user'] , status: 422
            end
        end
    end

    private 

    def user_params
        params.require(:user).permit(:id,
                                     :email, 
                                     :password, 
                                     :name, 
                                     :bio)
    end

end
