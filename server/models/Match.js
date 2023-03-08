const { Schema, Types , model} = require('mongoose');

const MatchSchema = new Schema(
  {
    userName: {
        type:String,
        required: true,
        maxlength: 50
 
    },
}
);
const Match = model('Match', MatchSchema)
module.exports = Match;
