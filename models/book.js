'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Category,{foreignKey: "CategoryId"})
    }
  }
  Book.init({
    title: {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "title category cannot be null",
        },
      },
    },
    category: {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "category cannot be null",
        },
      },
    },
    author: {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "author cannot be null",
        },
      },
    },
    image:  {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "image cannot be null",
        },
      },
    },
    price:  {type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "price cannot be null",
        },
      },
    },
    description:  {type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "description cannot be null",
        },
      },
    },
    CategoryId: {type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: {
          args: true,
          msg: "category id cannot be null",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};