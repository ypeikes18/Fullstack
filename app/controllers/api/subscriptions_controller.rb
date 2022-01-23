class Api::SubscriptionsController < ApplicationController

    def create
        @subscription = Subscription.new(subscription_params)
        if @subscription.save
            render :show
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    def destroy
        @subscription = Subscription.find(params[:id])
        if @subscription
            @subscription.destroy
            render :show
        else
            render json: ['Subscription not found'], status: 404
        end
    end

    private

    def subscription_params
        params
         .require(:subscription)
         .permit(:subscriber_id, :blog_id)
    end

end
