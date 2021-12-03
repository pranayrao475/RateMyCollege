Rails.application.routes.draw do
  resources :users
  #get 'pages/index'
  root to: 'pages#index'
 
  namespace :api do
    namespace :v1 do 
      resources :colleges, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end
   get '*path', to: 'pages#index', via: :all

end
