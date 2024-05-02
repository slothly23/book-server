const router = require("express").Router();

const BookController = require("../controllers/bookController");
const CategoryController = require("../controllers/categoryController");
// const authentication = require("../middlewares/auth");
const UserController = require("../controllers/userController");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images')
    },
    filename: (req, file, cb) => {
       cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({
    storage: storage
})

router.post("/register", UserController.userRegister)
router.post("/login", UserController.userLogin)
// router.use(authentication);
router.post("/add/book", upload.single('image'), BookController.addBook)
router.get("/book", BookController.getBooks)
router.get("/book/:id", BookController.getBook)
router.patch("/edit/book/:id", upload.single('image'), BookController.updateBook)
router.delete("/book/:id", BookController.deleteBook)
router.get("/category", CategoryController.getCategory)

module.exports = router