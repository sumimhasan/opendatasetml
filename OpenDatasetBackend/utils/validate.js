function validateDataset(dataset) {
    const { category, title, sub_title, description, datasetLink } = dataset;

    if (!category || !title || !sub_title || !description || !datasetLink) {
        return { valid: false, message: "All fields are required" };
    }

    if (!/^https:\/\//.test(datasetLink)) {
        return { valid: false, message: "datasetLink must be HTTPS" };
    }

    return { valid: true };
}

module.exports = { validateDataset };
