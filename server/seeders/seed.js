const db = require('../config/connection');
const { User} = require('../models');

const userSeeds = [
  {
   name: 'eliseo',
   email: 'eliseo@gmail.com',
   password:'passsword',
   matches : []
  },


  {
    name: 'eliseo2',
    email: 'eliseo@gmail2.com',
    password:'passswordd',
    matches : []
   }
]
db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds); 

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
/**
 *  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

  matches: [{
    type:Schema.Types.ObjectId,
    ref: 'Match'
  }],

  password: {
    type: String,
    required: true,
    minlength: 5,
  }
  
 */