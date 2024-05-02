const { Category } = require("../models");

class CategoryController{
    static async getCategory(request, response, next) {
        try {
            const category = await Category.findAll();
            response.status(200).json(category);
          } catch (error) {
            next(error);
          }
    }
}

module.exports = CategoryController