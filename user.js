const mongoose = require('mongoose');

const userStatsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  postCount: {
    type: Number,
    default: 0
  },
 });
commentCount: { 
    type: Number, 
    default: 0 
  },
  
  lastUpdated: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('UserStats', userStatsSchema);