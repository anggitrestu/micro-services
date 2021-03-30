const express = require('express');
const router = express.Router();
const courseHandler = require('./handler/courses');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, courseHandler.create);
router.put('/:id', verifyToken, courseHandler.update);
router.delete('/:id', verifyToken, courseHandler.destroy);

router.get('/', courseHandler.getAll);
router.get('/:id', courseHandler.get);

module.exports = router;
