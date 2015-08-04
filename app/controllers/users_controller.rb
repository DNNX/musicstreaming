#encoding: utf-8
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :authorize, only: [:new, :create, :index]


  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to sessions_new_path, alert: 'Dein Account wurde erfolgreich eingerichtet!' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { redirect_to new_user_path, alert: 'Ups! Irgentwas ging schief :( überprüfe nochmal deine eingaben'}
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to landing_index_path, alert: 'Einstellungen wurden erfolgreich gespeichert!' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { redirect_to edit_user_path, alert: 'Bitte alle Felder ausfüllen!'}
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
