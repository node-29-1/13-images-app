const catchError = require('../utils/catchError');
const User = require('../models/User');
const { uploadToCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

const create = catchError(async(req, res) => {
    if (!req.file) return res.status(400).json({ message: "Debes enviar una imagen"});
    const { path, filename } = req.file;
    const { url } = await uploadToCloudinary(path, filename);
    const { firstName, lastName } = req.body;
    const user = await User.create({
        firstName, lastName, imageUrl: url
    })
    return res.status(201).json(user);
});

module.exports = {
    getAll, 
    create
}