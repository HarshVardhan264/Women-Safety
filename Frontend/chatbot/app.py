import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from utils.loader import load_documents
from utils.splitter import split_documents
from utils.embedding import build_vectorstore
from utils.rag import RAGChatbot

load_dotenv()

app = FastAPI(title="Women Safety Law Chatbot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = "data"
VECTOR_DIR = "database/vectorstore"
chatbot = None

@app.on_event("startup")
async def startup():
    global chatbot
    # Only re-embed if vectorstore doesn't exist yet
    if not os.path.exists(VECTOR_DIR) or not os.listdir(VECTOR_DIR):
        print("Building vector store from PDFs...")
        docs = load_documents(DATA_DIR)
        chunks = split_documents(docs)
        build_vectorstore(chunks, VECTOR_DIR)

    chatbot = RAGChatbot(
        vectorstore_dir=VECTOR_DIR,
       
    )
    print("Chatbot ready!")

class ChatRequest(BaseModel):
    question: str

@app.post("/chat")
async def chat(req: ChatRequest):
    result = chatbot.ask(req.question)
    return result

@app.get("/health")
async def health():
    return {"status": "ok"}