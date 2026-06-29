from utils.embedding import load_vectorstore
from utils.prompts import SYSTEM_PROMPT, build_prompt

from langchain_mistralai import ChatMistralAI
from langchain_core.messages import SystemMessage, HumanMessage

import os


class RAGChatbot:
    def __init__(self, vectorstore_dir: str):
        # Load vector database
        self.vectorstore = load_vectorstore(vectorstore_dir)

        # Create retriever
        self.retriever = self.vectorstore.as_retriever(
            search_type="similarity",
            search_kwargs={"k": 5},
        )

        # Initialize LLM
        self.llm = ChatMistralAI(
            model="mistral-large-latest",
            api_key=os.getenv("MISTRAL_API_KEY"),
            temperature=0.2,
        )

    def ask(self, question: str) -> dict:
        question = question.strip()
        lower_question = question.lower()

        # -----------------------------
        # Greeting Handling
        # -----------------------------
        greetings = {
            "hi",
            "hello",
            "hey",
            "hii",
            "good morning",
            "good afternoon",
            "good evening"
        }

        if lower_question in greetings:
            return {
                "answer": (
                    "Hello! 👋\n\n"
                    "I'm your Women's Safety Legal Assistant.\n\n"
                    "I can help you with:\n\n"
                    "• Sexual harassment\n"
                    "• Domestic violence\n"
                    "• Cybercrime\n"
                    "• Stalking\n"
                    "• Workplace harassment\n"
                    "• Online abuse\n"
                    "• Police complaints\n"
                    "• Women's legal rights in India\n\n"
                    "Describe your situation or ask your legal question, "
                    "and I'll explain the relevant laws and suggest practical next steps."
                ),
                "sources": [],
                "chunks_used": 0,
            }

        # -----------------------------
        # Thanks Handling
        # -----------------------------
        thanks = {
            "thanks",
            "thank you",
            "thx"
        }

        if lower_question in thanks:
            return {
                "answer": (
                    "You're welcome! 😊\n\n"
                    "If you have any questions about women's safety, legal rights, "
                    "or need help understanding a situation, I'm here to help."
                ),
                "sources": [],
                "chunks_used": 0,
            }

        # -----------------------------
        # Goodbye Handling
        # -----------------------------
        goodbye = {
            "bye",
            "goodbye",
            "see you"
        }

        if lower_question in goodbye:
            return {
                "answer": (
                    "Take care! Stay safe. 💙\n\n"
                    "If you ever need legal information or guidance regarding "
                    "women's safety, feel free to come back anytime."
                ),
                "sources": [],
                "chunks_used": 0,
            }

        # -----------------------------
        # Retrieve Relevant Documents
        # -----------------------------
        docs = self.retriever.invoke(question)

        # Build prompt with retrieved context
        prompt = build_prompt(docs, question)

        # Generate response
        response = self.llm.invoke([
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=prompt),
        ])

        # Extract source filenames
        sources = list({
            doc.metadata.get("source_file", "Unknown")
            for doc in docs
        })

        return {
            "answer": response.content,
            "sources": sources,
            "chunks_used": len(docs),
        }