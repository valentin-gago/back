require("dotenv/config");
const mongoose = require("mongoose");
const artistModel = require("../models/artista.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/back";

const artist = [
  {
    name: "test1",
    song: "test1",
    age: 23,
    start_year: 1995,
  },
  {
    name: "test2",
    song: "test2",
    age: 56,
    start_year: 1946,
  },
  {
    name: "test3",
    song: "test3",
    age: 29,
    start_year: 1965,
  },
  {
    name: "test4",
    song: "test4",
    age: 43,
    start_year: 1975,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .then(() => {
    return artistModel.insertMany(artist);
  })
  .then(() => {
    console.log("Artistas creados");
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.disconnect();
  });
