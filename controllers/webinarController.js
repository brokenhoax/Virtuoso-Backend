const db = require("../models");

exports.create = (req, res) => {
    const body = req.body;
    console.log(body);
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
                id: Webinar._webinarid,
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

}

exports.delete = async (req,res) => {

}

exports.getId = async (req,res) => {
    await db.Webinar.findOne({ _webinarid: req.params.id }, (err, webinar) => {
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