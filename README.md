# OpenDataSet.ml - Backend API

> A scalable backend for indexing AI datasets using Express.js and MongoDB.

## 🚀 Features
- RESTful API for dataset management
- MongoDB persistence
- Input validation
- Environment-based configuration
- Layered architecture (Controller → Service → Model)

## 🔧 Setup

### 1. Clone & Install
```bash
git clone <your-repo>
cd opendataset-backend
npm install


API Endpoints 
GET /api/datasets 

    Fetch datasets
    Query: ?category=chat&count=5
     

POST /api/datasets 

    Add a new dataset
    Body:
     {
  "category": "chat",
  "title": "LMSYS-Chat-1M",
  "sub_title": "Real-world LLM conversations",
  "description": "1 million real-world conversations with 25 LLMs...",
  "datasetLink": "https://huggingface.co/datasets/lmsys/lmsys-chat-1m",
  "size": "1M conversations",
  "token": "200B+ tokens"
}