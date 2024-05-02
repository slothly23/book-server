const multer = require("multer");
const { Book, Category } = require("../models");
const path = require("path");
const fs = require("fs")

class BookController {
  static async addBook(request, response, next) {
    const { title, category, author, price, description, CategoryId } =
      request.body;
    const image = request.file ? request.file.filename : "";
    console.log(title, CategoryId);

    try {
      const user = await Book.create({
        title,
        category,
        author,
        image,
        price,
        description,
        CategoryId,
      });
      response.status(201).json({
        id: user.id,
        title,
        category,
        author,
        image,
        price,
        description,
        CategoryId,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getBooks(request, response, next) {
    try {
      const books = await Book.findAll({
        include: [{ model: Category, attributes: ["id", "name"] }],
        // raw: true,
        // nest: true,
      });
      // const root = path.resolve();
      response.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  static async getBook(request, response, next) {
    const { id } = request.params;
    console.log(id);

    try {
      const data = await Book.findOne({ where: { id } });
      console.log(data);
      response.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async updateBook(request, response, next) {
    const { id } = request.params;
    const { title, category, author, price, description, CategoryId } =
      request.body;

      const book = await Book.findByPk(id, { raw: true });
      if (!book) throw { message: "Book not found", status: 404 };

    let imagef = ""
    if (request.file == null) {
      imagef = book.image
    } else {
      imagef = request.file.filename
      const filePath = `./public/images/${book.image}`;
      fs.unlinkSync(filePath);
    }
  
    try {
      const updateBook = {
        title,
        category,
        author,
        image: imagef,
        price,
        description,
        CategoryId,
      };
      
      await Book.update(updateBook, { where: { id } });
      response.status(200).json({ message: `success update book id ${id}` });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(request, response, next) {
    const { id } = request.params;
    const book = await Book.findOne({ where: { id }})
    if(!book) {
      return response.status(404).json({ message: "No data found"})
    }

    try {
      const filePath = `./public/images/${book.image}`;
      fs.unlinkSync(filePath);
      const deleteBook = await Book.destroy({ where: { id } });
      response.status(200).json({ message: `success delete book id ${id}` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BookController;
