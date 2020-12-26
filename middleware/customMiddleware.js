exports.userAgentCheck = (req, res, next) => {
  const userAgent = req.headers['user-agent'];

  const acceptUser = userAgent.startsWith('Mozilla/');

  if (process.env.NODE_ENV === 'production' && !acceptUser) {
    return res
      .status(400)
      .json({ message: 'What are you trying to Do ??? Use a Browser' });
  }

  next();
};

exports.stringifyBody = async (req, res, next) => {
  console.log('Res', JSON.stringify(res.body));
  next();
};

// module.exports = userAgentCheck;
