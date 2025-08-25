const datasetService = require("../services/datasetService");

async function getDataset(req, res) {
  try {
    const { category, count } = req.query;
    const num = count && !isNaN(count) ? parseInt(count) : 10;
    const datasets = await datasetService.getDataset(category, num);
    res.json({
      success: true,
      count: datasets.length,
      data: datasets,
    });
  } catch (err) {
    console.error("Error fetching datasets:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function pullReqDataset(req, res) {
  try {
    const datasetData = req.body;
    const dataset = await datasetService.addDataset(datasetData);
    res.status(201).json({
      success: true,
      message: "Dataset added successfully",
       dataset,
    });
  } catch (err) {
    console.error("Error adding dataset:", err.message);
    res.status(400).json({ error: err.message });
  }
}

module.exports = { getDataset, pullReqDataset };