const express = require("express");
const router = express.Router();
const datasetController = require("../controllers/datasetController");

router.get("/getDataset", datasetController.getDataset);
router.post("/pullReqDataset", datasetController.pullReqDataset);

module.exports = router;
