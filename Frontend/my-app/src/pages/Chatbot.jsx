import React, { useState, useRef, useEffect } from "react";
import { SendHorizonal, Loader2, FileText } from "lucide-react";
import Navbar from '../components/Navbar';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const API_URL = "http://localhost:8000";

const Chatbot = () => {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");

    if (!started) setStarted(true);

    // 1. Add user message immediately
    const userMsg = { id: Date.now(), sender: "user", text: userText };
    setMessages(prev => [...prev, userMsg]);

    // 2. Add a loading placeholder for the AI
    const loadingId = Date.now() + 1;
    setMessages(prev => [...prev, { id: loadingId, sender: "ai", loading: true }]);
    setIsLoading(true);

    try {
      // 3. Call your FastAPI backend
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userText }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      // data = { answer: "...", sources: ["law1.pdf", ...], chunks_used: 5 }

      // 4. Replace loading bubble with real answer
      setMessages(prev =>
        prev.map(msg =>
          msg.id === loadingId
            ? {
              id: loadingId,
              sender: "ai",
              text: data.answer,
              sources: data.sources || [],
              loading: false,
            }
            : msg
        )
      );
    } catch (err) {
      // 5. Show error in the chat bubble
      setMessages(prev =>
        prev.map(msg =>
          msg.id === loadingId
            ? {
              id: loadingId,
              sender: "ai",
              text: "Sorry, I couldn't reach the server. Please make sure the backend is running.",
              sources: [],
              loading: false,
              isError: true,
            }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div
        className={`transition-all duration-700 overflow-hidden ${started ? "opacity-0 max-h-0 scale-95" : "opacity-100 max-h-[500px] scale-100"
          }`}
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center flex-1 mt-24">
          <img src="/logo.png" className="w-50 h-50 mb-6 rounded-3xl shadow-lg" alt="logo" />
          <h1 className="text-6xl font-bold text-center">
            I am your <span className="text-orange-500">AI Sakhi</span>
          </h1>
          <p className="text-gray-500 text-xl mt-4 text-center">
            I'm here to listen, support and guide you
            <br />
            anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className={`flex-1 transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 h-0 overflow-hidden"
          }`}
      >
        <div className="max-w-4xl mx-auto h-[65vh] overflow-y-auto px-4 py-8 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.sender === "ai" ? (
                <div className="flex items-start gap-3 max-w-3xl">
                  <img
                    src="/logo.png"
                    alt="Sakhi AI"
                    className="w-10 h-10 rounded-xl bg-white shadow border border-orange-100 p-1 mt-1 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">

                    {/* AI bubble — loading OR answer */}
                    <div
                      className={`bg-white border rounded-2xl rounded-tl-md px-5 py-4 shadow-sm leading-7 ${msg.isError
                          ? "border-red-200 text-red-500"
                          : "border-orange-100 text-gray-800"
                        }`}
                    >
                      {msg.loading ? (
                        // Typing indicator
                        <div className="flex items-center gap-2 text-gray-400">
                          <Loader2 size={16} className="animate-spin" />
                          <span className="text-base">Sakhi is thinking…</span>
                        </div>
                      ) : (
                        // Render newlines in the answer
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({ children }) => (
                              <h1 className="text-3xl font-bold mb-4">
                                {children}
                              </h1>
                            ),

                            h2: ({ children }) => (
                              <h2 className="text-2xl font-bold text-orange-600 mt-6 mb-3">
                                {children}
                              </h2>
                            ),

                            h3: ({ children }) => (
                              <h3 className="text-xl font-semibold text-orange-500 mt-5 mb-2">
                                {children}
                              </h3>
                            ),

                            p: ({ children }) => (
                              <p className="mb-3 leading-7">
                                {children}
                              </p>
                            ),

                            ul: ({ children }) => (
                              <ul className="list-disc ml-6 mb-4 space-y-2">
                                {children}
                              </ul>
                            ),

                            ol: ({ children }) => (
                              <ol className="list-decimal ml-6 mb-4 space-y-2">
                                {children}
                              </ol>
                            ),

                            li: ({ children }) => (
                              <li>{children}</li>
                            ),

                            strong: ({ children }) => (
                              <strong className="font-bold text-orange-600">
                                {children}
                              </strong>
                            ),

                            hr: () => (
                              <hr className="my-5 border-gray-300" />
                            ),
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      )}
                    </div>

                    {/* Source pills — shown below the bubble */}
                    {!msg.loading && msg.sources && msg.sources.length > 0 && (
                      <div className="flex flex-wrap gap-2 pl-1">
                        {msg.sources.map((src) => (
                          <span
                            key={src}
                            className="inline-flex items-center gap-1 text-xs bg-orange-50 text-orange-600 border border-orange-100 rounded-full px-3 py-1"
                          >
                            <FileText size={11} />
                            {src}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              ) : (
                <div className="bg-orange-500 text-white rounded-2xl rounded-tr-md px-5 py-4 max-w-2xl shadow-md">
                  {msg.text}
                </div>
              )}
            </div>
          ))}

          {/* Invisible anchor for auto-scroll */}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-orange-100 flex items-center px-6 py-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={isLoading ? "Sakhi is thinking…" : "Type your message..."}
            disabled={isLoading}
            className="flex-1 outline-none bg-transparent disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="ml-4 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <SendHorizonal size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;