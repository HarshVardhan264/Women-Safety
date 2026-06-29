from langchain_text_splitters import RecursiveCharacterTextSplitter

def split_documents(documents: list) -> list:
    """
    Split docs into overlapping chunks.
    - chunk_size=800: fits ~2-3 legal points per chunk
    - chunk_overlap=150: ensures no point is cut off mid-sentence
    """
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=150,
        separators=["\n\n", "\n", ". ", " ", ""],
        length_function=len,
    )
    chunks = splitter.split_documents(documents)
    print(f"Split into {len(chunks)} chunks")
    return chunks