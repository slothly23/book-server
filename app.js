if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static('public'));

app.use(router)
app.use(errorHandler);

module.exports = app;