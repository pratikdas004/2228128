const PostStats = require('./models/PostStats');

async function getTopPosts(req, res, next) {
  try {
    const topPosts = await PostStats.find()
     .sort({ commentCount: -1 })
     .limit(5)
     .select('postId title commentCount userId username lastUpdated')
     .lean();

    res.json({
      success: true,
count: topPosts.length,
    data: topPosts
  }); 
  
  catch (error) {
    next(error);
  } 
};

module.exports = {
  getTopPosts
};