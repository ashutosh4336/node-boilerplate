exports.meetPeople = async (req, res, next) => {
  try {
    if (req.user) {
      return res.status(200).json({ message: 'Hi' });
    }
    res.status(422).json({ msg: 'Unprocessable Entity' });
  } catch (err) {
    next(err);
  }
};
