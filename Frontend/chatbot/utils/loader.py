from langchain_community.document_loaders import PyPDFLoader
from pathlib import Path

def load_documents(data_dir="data"):
    """Load all PDFs from the data folder."""

    data_path = Path(data_dir)

    all_docs = []

    for pdf in data_path.glob("*.pdf"):
        loader = PyPDFLoader(str(pdf))
        docs = loader.load()

        for doc in docs:
            doc.metadata["source_file"] = pdf.name

        all_docs.extend(docs)
        print(f"Loaded {len(docs)} pages from {pdf.name}")

    print(f"\nTotal pages loaded: {len(all_docs)}")

    return all_docs