const { Schema, Types } = require('mongoose');

const dogSchema = new Schema(
  {
    dogbreed: {
        type:String,
        required: true,
        maxlength: 50
 
    },
}
);

module.exports = dogSchema;
