Rails.application.routes.draw do
  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resources :wines, only: [:index, :create, :show, :update]
  end

  root to: 'static_pages#root'

end
