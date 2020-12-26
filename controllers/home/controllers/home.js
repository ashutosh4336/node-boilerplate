const crypto = require('crypto');

// @desc        Test Route
// @route       GET /api/v1/home
// @access      Public
exports.homeTest = async (req, res, next) => {
  return res.status(200).json({ msg: 'Hiiiiiiiiiiiiiiiii' });
};

// const doWork = (duration) => {
//   const start = Date.now();
//   while (Date.now() - start < duration) {
//     console.log('Working');
//   }
// };
