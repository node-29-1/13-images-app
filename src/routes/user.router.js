const { getAll, create } = require('../controllers/user.controllers');
const express = require('express');
const upload = require('../utils/multer')

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(upload.single('photo'), create);

module.exports = userRouter;


