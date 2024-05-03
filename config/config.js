require('dotenv').config();

module.exports = { 
  development: {
    username: "root",
    password: "1a2345",
    database: "book",
    host: "3306",
    dialect: "mysql",
    dialectModule: require('mysql2'),
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
