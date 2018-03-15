
// const { getAll, getOne } = require("../models/Movie");
const Movie = require("../models/Movie");

module.exports.getAllMovies = ({query: {inTheaters}}, res, next) => {
    const getMovies = inTheaters ? "getCurrent" : "getAll";
    Movie[getMovies]()
        .then(movies => {
            res.status(200).json(movies);
        })
        .catch((err) => next(err));
};

module.exports.getOneMovie = (req, res, next) => {
    Movie.getOne(req.params.id)
        .then(movies => {
            res.status(200).json(movies);
        })
        .catch((err) => next(err));
};