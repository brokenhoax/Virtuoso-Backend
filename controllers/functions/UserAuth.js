const { db } = require("../../models/userModel")

exports.verifyBody = (body) => {
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all the required information for the form!'
        })
    }
}

exports.verifyUser = (user) => {
    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
}

exports.existingUsername = async (username) => {
    const results = await db.User.findOne({ username: username });
    return (results.length > 0) ? true : false;
}

exports.existingEmail = async (email) => {
    const results = await db.User.findOne({ email: email });
    return (results.length > 0) ? true : false;
}