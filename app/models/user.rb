class User < ActiveRecord::Base
  has_secure_password
  validates :email,
            format:/\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i,
            uniqueness: true
  validates :username,
             uniqueness: true
end
