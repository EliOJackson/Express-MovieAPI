
const { getAll, getOne } = require("../models/Movie");

module.exports.getAllMovies = (req, res, next) => {
    getAll()
        .then((movies) => {
            res.status(200).json(movies);
        })
        .catch((err) => next(err));
};

module.exports.getOneMovie = (req, res, next) => {
    getOne(req.params.id)
        .then((movies) => {
            res.status(200).json(movies);
        })
        .catch((err) => next(err));
};