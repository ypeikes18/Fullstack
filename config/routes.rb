Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api ,defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :blogs, only: [:create, :destroy, :show, :update, :index]
    resources :posts
    resources :comments
    resources :likes, only: [:create, :destroy]
    resources :subscriptions, only: [:create, :destroy]
  end
end
