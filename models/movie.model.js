const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      unique: true
    },
    genre: {
      type: String,
      required: true
    },
    plot: {
      type: String,
      required: true
    }, 
    cast: {
        type: Array, 
        required: true 
    }
  },
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;