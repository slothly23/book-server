'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "username cannot be null",
        },
      },
    },
    email: {type:DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email is already exists",
      },
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "email cannot be null",
        },
      },
    },
    password: {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "username cannot be null",
        },
      },
    }
  },
  {
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password);
      },
    },
    sequelize,
    modelName: "User",
  },
   {
    sequelize,
    modelName: 'User',
  });
  return User;
};