const { isValidObjectId } = require("mongoose");
const artistModel = require("../models/artists.model");

const TestController = (req, res, next) => {
  // BODY POST PUT --> req.body
  // PARAMS GET POST PUT DELETE --> req.params
  // QUERY GET POST PUT DELETE --> req.query
  res.status(200).json({
    artist: {
      name: "test",
      age: 12,
    },
  });
};

const getOne = (req, res, next) => {
  artistModel
  .findOne({name: req.body.name})
}

const getAll = (req, res, next) => {
  artistModel
    .find()
    .then(artists => {
      res.status(200).json(artists)
    })
  .catch (err => console.log(err))
};


const create = (req, res, next) => {
  const {
    name,
    song,
    age,
    start_year,
  } = req.body;
  console.log(req.body);
  artistModel
    .create({
      name,
      song,
      age,
      start_year,
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
};

const updateOne = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new Error("Error: Invalid mongo ID");
    }
    const {
      name,
      song,
      age,
      start_year,
    } = req.body;
    artistModel
      .findByIdAndUpdate(id, {
        name,
        song,
        age,
        start_year,
      })
      .then(() => {
        res.sendStatus(204);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};

const deleteOne = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new Error("Error: Invalid mongo ID");
    }
    artistModel
      .findByIdAndDelete(id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};






module.exports = {
  TestController,
  getAll,
  create,
  updateOne,
  deleteOne,
};
