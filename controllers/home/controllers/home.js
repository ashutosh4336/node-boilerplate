const crypto = require('crypto');

exports.homeTest = async (req, res, next) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    return res.status(200).json({ message: 'Success' });
  });
  // res.status(200).json({ msg: 'Hi' });
};

// const doWork = (duration) => {
//   const start = Date.now();
//   while (Date.now() - start < duration) {
//     console.log('Working');
//   }
// };
