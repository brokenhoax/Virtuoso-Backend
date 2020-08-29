const router = require("express").Router();

const WebControl = require('../controllers/webinarController');

router.post('/webinar/create', WebControl.create);
router.patch('/webinar/update/:id', WebControl.update);
router.delete('/webinar/delete/:id', WebControl.delete);
router.get('/webinar/get/:id', WebControl.getId);
router.get('/webinar/get/all', WebControl.getAll);

module.exports = router;