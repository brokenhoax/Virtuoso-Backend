const userAuth = require("./functions/UserAuth.js");
const db = require("../models");

exports.create = ({body}, res) => {

    userAuth.verifyBody(body);
    const User = new db.User(body);
    userAuth.verifyUser(User);

    User
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: User._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

exports.update = async ({body},res) => {
    userAuth.verifyBody(body);
    const User = new db.User(body);
    userAuth.verifyUser(User);
    
    db.User.findOne({ _id: User.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
    // Update Code -- redefine variables
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

exports.delete = async (req,res) => {
    await db.User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

exports.getId = async (req,res) => {
    await db.User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

exports.getAll = async (req,res) => {
    await db.User.find({}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user.length) {
            return res
                .status(404)
                .json({ success: false, error: `Users not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

exports.verifyUser = async ({body},res) => {

    userAuth.verifyBody(body);
    const User = new db.User(body);
    userAuth.verifyUser(User);

    await db.User.findOne({ username: User.username, password: User.password }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}