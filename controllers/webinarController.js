const db = require("../models");

exports.create = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide all the required information for the Webinar!'
        })
    }

    const Webinar = new db.Webinar(body);
    if (!Webinar) {
        return res.status(400).json({ success: false, error: err })
    }

    Webinar
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Webinar._id,
                message: 'Webinar created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Webinar not created!',
            })
        })
}

exports.update = async (req,res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    db.Webinar.findOne({ _id: req.params.id }, (err, webinar) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Webinar not found!',
            })
        }
        webinar.title = body.title
        webinar.description = body.description
        webinar.date = body.date
        webinar.hosts = body.hosts
        webinar.mainTopic = body.mainTopic
        webinar.skillLevel = body.skillLevel
        webinar.quiz = body.quiz
        webinar.tags = body.tags
        webinar
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: webinar._id,
                    message: 'Webinar updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Webinar not updated!',
                })
            })
    })
}

exports.delete = async (req,res) => {
    await Webinar.findOneAndDelete({ _id: req.params.id }, (err, webinar) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!webinar) {
            return res
                .status(404)
                .json({ success: false, error: `Webinar not found` })
        }

        return res.status(200).json({ success: true, data: webinar })
    }).catch(err => console.log(err))
}

exports.getId = async (req,res) => {
    await db.Webinar.findOne({ _id: req.params.id }, (err, webinar) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!webinar) {
            return res
                .status(404)
                .json({ success: false, error: `Webinar not found` })
        }
        return res.status(200).json({ success: true, data: webinar })
    }).catch(err => console.log(err))
}

exports.getAll = async (req,res) => {
    await db.Webinar.find({}, (err, webinar) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!webinar.length) {
            return res
                .status(404)
                .json({ success: false, error: `Webinars not found` })
        }
        return res.status(200).json({ success: true, data: webinar })
    }).catch(err => console.log(err))
}