exports.verifyBody = (body) => {
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all the required information for the User!'
        })
    }
}

exports.verifyUser = (user) => {
    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
}

// exports.existingUsername = async () => {

// }

// exports.existingEmail = async () => {
//     const results = await users.getUserByEmail(this._item.email);
//     return (results.length > 0) ? true : false;
// }
