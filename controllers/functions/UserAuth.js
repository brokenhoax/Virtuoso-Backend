const db = require("../../models")

exports.verifyBody = (body, res) => {
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all the required information for the form!'
        }).end()
    }
}

exports.verifyUser = (user, res) => {
    if (!user) {
        return res.status(400).json({ success: false, error: err }).end()
    }
}

// exports.initialize = (body, res) => {
//     this.verifyBody(body, res);
//     const User = new db.User(body);
//     this.verifyUser(User, res);
//     return User;
// }

// Not actually using Usernames right now, but in case, keep it
// exports.existingUsername = async (username) => {
//     const results = await db.User.findOne({ username: username });
//     return (results !== null) ? true : false;
// }

exports.existingEmail = async (email) => {
    const results = await db.User.findOne({ email: email });
    return (results !== null) ? true : false;
}