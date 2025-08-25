const Dataset = require("../models/DataSetModel");

async function getDataset(category, count = 10) {
  const query = category ? { category } : {};
  return await Dataset.find(query).limit(count).lean().exec();
}

async function addDataset(datasetData) {
  const dataset = new Dataset(datasetData);
  return await dataset.save();
}

module.exports = { getDataset, addDataset };