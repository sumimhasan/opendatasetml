const express = require("express");
const router = express.Router();
const datasetController = require("../controllers/datasetController");
const { validateDatasetInput } = require("../middleware/validation");

router.get("/datasets", datasetController.getDataset);
router.post("/datasets", validateDatasetInput, datasetController.pullReqDataset);

module.exports = router;