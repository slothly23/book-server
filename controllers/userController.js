const { User} = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController{
   static async userRegister(request, response, next) {
    const {
        username,
        email,
        password,
    } = request.body
    console.log(username);
    console.log(request);

    try {
        const user = await User.create({ username, email, password });
        response.status(201).json({
          id: user.id,
          username,
          email,
          password
        });
      } catch (error) {
        next(error);
      }
   }

   static async userLogin(request, response, next) { 
       const { email, password } = request.body;
       console.log(email);
    try {
        if (!email || !password) throw { message: "Invalid Email/Password", statu: 401 };
        let user = await User.findOne({ where: { email } });
  
        if (!user || !checkPassword(password, user.password)) throw { message: "Invalid Email/Password", statu: 401 };
        response.status(200).json({ access_token: signToken({ id: user.id, email: user.email }) });
      } catch (error) {
        next(error);
      }

   }
}

module.exports = UserController