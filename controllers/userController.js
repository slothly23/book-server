const { User} = require("../models");

class UserController{
   static async userRegister(request, response, next) {
    const {
        username,
        email,
        password,
    } = request.body
    console.log(username);
    console.log(request);
   }
}

module.exports = UserController