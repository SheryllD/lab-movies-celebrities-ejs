//  Add your code here

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const celebritySchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      unique: true
    },
    occupation: {
      type: String,
      required: true,
      unique: true,
    },
    catchPhrase: {
      type: String,
      required: true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;