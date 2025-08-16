const express = require("express");
const app = express();
const datasetRoutes = require("./routes/datasetRoutes");

app.use(express.json());
app.use("/api", datasetRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
