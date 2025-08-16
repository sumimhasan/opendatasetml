const Dataset = require("../models/datasetModel");
const { validateDataset } = require("../utils/validate");

function getDataset(category, count) {
    return Dataset.getByCategory(category, count);
}

function addDataset(datasetJson) {
    const validation = validateDataset(datasetJson);
    if (!validation.valid) {
        throw new Error(validation.message);
    }
    const dataset = new Dataset(
        datasetJson.category,
        datasetJson.title,
        datasetJson.sub_title,
        datasetJson.description,
        datasetJson.datasetLink
    );
    return Dataset.add(dataset);
}

module.exports = { getDataset, addDataset };
