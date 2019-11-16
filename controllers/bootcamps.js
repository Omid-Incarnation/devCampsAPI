// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc     Get single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show a bootcamp ${req.params.id}` });
};

// @desc     Create new bootcamp
// @route    POST /api/v1/bootcamps
// @access   Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
};

// @desc     Update bootcamp
// @route    PUt /api/v1/bootcamps/:id
// @access   Private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc     Delete all bootcamps
// @route    DELETE /api/v1/bootcamps/:id
// @access   Public
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
