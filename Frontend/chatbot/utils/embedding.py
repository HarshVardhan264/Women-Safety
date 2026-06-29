from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

def get_embeddings():
    """Use a free, local embedding model — no API key needed."""
    return HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2",
        model_kwargs={"device": "cpu"},
    )

def build_vectorstore(chunks: list, persist_dir: str):
    """Embed chunks and save to ChromaDB."""
    embeddings = get_embeddings()
    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        persist_directory=persist_dir,
    )
    print(f"Vector store saved to {persist_dir}")
    return vectorstore

def load_vectorstore(persist_dir: str):
    """Load existing vector store (skip re-embedding)."""
    embeddings = get_embeddings()
    return Chroma(
        persist_directory=persist_dir,
        embedding_function=embeddings,
    )