const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  sub_title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  datasetLink: {
    type: String,
    required: [true, "Dataset link is required"],
    match: [/^https:\/\//, "Link must be a valid HTTPS URL"],
  },
  size: {
    type: String,
    default: "Not specified",
  },
  token: {
    type: String,
    default: "Not specified",
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Dataset", datasetSchema);