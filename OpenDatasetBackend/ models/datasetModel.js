const datasets = [];

class Dataset {
    constructor(category, title, sub_title, description, datasetLink) {
        this.index = datasets.length; // auto index
        this.category = category;
        this.title = title;
        this.sub_title = sub_title;
        this.description = description;
        this.datasetLink = datasetLink;
    }

    static getAll() {
        return datasets;
    }

    static add(dataset) {
        datasets.push(dataset);
        return dataset;
    }

    static getByCategory(category, count = 10) {
        const filtered = datasets.filter(d => d.category === category);
        return filtered.slice(0, count);
    }
}

module.exports = Dataset;
