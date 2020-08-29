const router = require("express").Router();

const WebControl = require('../controllers/webinarController');
const UserControl = require('../controllers/userController');

router.post('/webinar/create', WebControl.create);
router.patch('/webinar/update/:id', WebControl.update);
router.delete('/webinar/delete/:id', WebControl.delete);
router.get('/webinar/get/id/:id', WebControl.getId);
router.get('/webinar/get/all', WebControl.getAll);

router.post('/user/create', UserControl.create);
router.patch('/user/update/:id', UserControl.update);
router.delete('/user/delete/:id', UserControl.delete);
router.get('/user/get/id/:id', UserControl.getId);
router.get('/user/get/all', UserControl.getAll);

module.exports = router;