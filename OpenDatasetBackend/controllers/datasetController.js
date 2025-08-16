const datasetService = require("../services/datasetService");

async function getDataset(req, res) {
    try {
        const { category, count } = req.query;
        const num = count ? parseInt(count) : 10;
        const datasets = datasetService.getDataset(category, num);
        res.json(datasets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function pullReqDataset(req, res) {
    try {
        const datasetJson = req.body;
        const dataset = datasetService.addDataset(datasetJson);
        res.status(201).json(dataset);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { getDataset, pullReqDataset };
