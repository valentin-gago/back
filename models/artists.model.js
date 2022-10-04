// Crear el modelo de artista
const { Schema, model } = require("mongoose");

const artistSchema = new Schema(
    {
        name: { type: String },
        song: { type: String },
        age: { type: Number },
        start_year: { type: Number }
    },

    {
        timestamps: true,
    }
);

const artistModel = model("artist", artistSchema);

module.exports = artistModel;

    
