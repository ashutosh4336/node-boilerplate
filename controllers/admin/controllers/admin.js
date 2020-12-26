// @desc        Test Route
// @route       GET /api/v1/admin
// @access      Public
exports.meetPeople = async (req, res, next) => {
  try {
    const data = {
      name: 'Ashutosh Panda',
      city: 'Gurugram',
      occupation: 'Software Developer',
      age: 21,
    };
    return res.status(200).json({ msg: 'Success', data });
  } catch (err) {
    next(err);
  }
};
