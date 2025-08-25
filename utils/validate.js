function validateDataset(dataset) {
  const requiredFields = [
    "category",
    "title",
    "description",
    "datasetLink"
  ];

  for (const field of requiredFields) {
    if (!dataset[field] || typeof dataset[field] !== "string" || !dataset[field].trim()) {
      return { valid: false, message: `${field} is required and must be a non-empty string.` };
    }
  }

  if (!/^https:\/\//i.test(dataset.datasetLink)) {
    return { valid: false, message: "datasetLink must start with https://" };
  }

  return { valid: true };
}

module.exports = { validateDataset };