# AI Sakhi - RAG Chatbot (Python)

## Overview

AI Sakhi is a Retrieval-Augmented Generation (RAG) chatbot designed to provide accurate, context-aware guidance on women's safety laws in India. The chatbot retrieves relevant legal information from PDF documents and generates natural language responses using the Mistral Large language model.

Instead of relying solely on the LLM's knowledge, AI Sakhi searches a curated legal knowledge base before generating answers, improving accuracy and reducing hallucinations.

---

## Features

* Retrieval-Augmented Generation (RAG)
* PDF-based legal knowledge base
* Automatic document chunking
* Local HuggingFace embeddings
* ChromaDB vector database
* Mistral AI for response generation
* Source document citations
* FastAPI REST API
* Spell correction support
* Designed specifically for Indian women's safety and legal assistance

---

## Tech Stack

* Python 3.11+
* FastAPI
* LangChain
* Mistral AI
* ChromaDB
* HuggingFace Sentence Transformers
* PyPDF
* Python Dotenv

---

## Project Structure

```
chatbot/
│
├── app.py                    # FastAPI application
├── requirements.txt
├── .env
│
├── data/                     # Legal PDF documents
│
├── database/
│   └── vectorstore/          # Chroma database
│
├── utils/
│   ├── loader.py             # PDF loader
│   ├── splitter.py           # Document chunking
│   ├── embedding.py          # Embedding & vector database
│   ├── rag.py                # Retrieval + LLM pipeline
│   └── prompts.py            # Prompt templates
│
└── README.md
```

---

## How It Works

1. Load all legal PDF documents.
2. Split documents into overlapping chunks.
3. Generate embeddings using HuggingFace Sentence Transformers.
4. Store embeddings in ChromaDB.
5. Receive a user's question.
6. Retrieve the most relevant document chunks.
7. Build a prompt using the retrieved context.
8. Generate a response using Mistral AI.
9. Return the answer along with source documents.

---

## Installation

Clone the repository

```bash
git clone <repository-url>
cd chatbot
```

Create a virtual environment

```bash
python -m venv .venv
```

Activate the environment

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create a `.env` file in the project root.

```
MISTRAL_API_KEY=your_api_key_here
```

---

## Running the Application

Start the FastAPI server

```bash
uvicorn app:app --reload
```

The API will be available at

```
http://localhost:8000
```

Interactive API documentation

```
http://localhost:8000/docs
```

---

## API Endpoints

### Health Check

```
GET /health
```

Response

```json
{
  "status": "ok"
}
```

---

### Chat Endpoint

```
POST /chat
```

Request

```json
{
  "question": "What should I do if I am facing domestic violence?"
}
```

Response

```json
{
  "answer": "...",
  "sources": [
    "DomesticViolenceAct.pdf"
  ],
  "chunks_used": 5
}
```

---

## RAG Pipeline

```
User Question
       │
       ▼
Spell Correction
       │
       ▼
Query Processing
       │
       ▼
Retrieve Relevant Chunks
       │
       ▼
Prompt Construction
       │
       ▼
Mistral AI
       │
       ▼
Generated Answer
       │
       ▼
Return Sources
```

---

## Embedding Model

```
sentence-transformers/all-MiniLM-L6-v2
```

The embedding model runs locally and does not require an API key.

---

## Language Model

```
mistral-large-latest
```

The model is accessed using the Mistral AI API.

---

## Knowledge Base

The chatbot retrieves information from PDF documents placed inside the `data/` directory.

Each PDF page is:

* Loaded
* Split into overlapping chunks
* Embedded
* Stored inside ChromaDB

Only relevant chunks are retrieved during inference.


