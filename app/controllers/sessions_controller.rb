#encoding: utf-8
class SessionsController < ApplicationController
  skip_before_action :authorize

  def new
  end

  def create
    user = User.find_by_username(params[:username])
    if user and user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to landing_url
    else
      redirect_to login_url, alert: "Falscher Username oder Passwort"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_url, alert: "Erfolgreich ausgeloggt!"
  end
end
