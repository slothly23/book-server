require('dotenv').config();

module.exports = { 
  development: {
    username: "root",
    password: "1a2345",
    database: "book",
    host: "localhost",
    dialect: "mysql",
    dialectModule: require('mysql2'),
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "localhost",
    dialect: "mysql"
  }
}
