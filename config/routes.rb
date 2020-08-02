Rails.application.routes.draw do
  get 'pages/index'
  get 'episodes', to: 'pages#episodes'
  root 'pages#index'
end
