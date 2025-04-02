const UserStats = require('./models/UserStats');

async function getTopUsers(req, res, next) {
  try {
    const topUsers = await UserStats.find()
     .sort({ postCount: -1 })
     .limit(5)
     .select('userId username postCount commentCount lastUpdated')
     .lean();

    res.json({
      success: true,
      count: topUsers.length,
data: topUsers
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTopUsers
};