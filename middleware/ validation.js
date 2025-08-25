const { validateDataset } = require("../utils/validate");

const validateDatasetInput = (req, res, next) => {
  const { valid, message } = validateDataset(req.body);
  if (!valid) {
    return res.status(400).json({ error: message });
  }
  next();
};

module.exports = { validateDatasetInput };