const { User } = require("../models/index.js");

export async function authentication(request, response, next) {
    try {
        let token = request.headers.access_token;

        if (!token) throw { message: "Invalid token", status: 401 };

        let { id } = decodeToken(token);
        let user = await User.findByPk(id);
        if (!user) throw { message: "Invalid token", status: 401 };

        request.user = {
            id: user.id,
            email: user.email,
            role: user.role,
        };
        next();
    } catch (error) {
        next;
    }
}