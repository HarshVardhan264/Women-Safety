import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";
import Navbar from '../components/Navbar';


const Chatbot = () => {
    // All state variables go here
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
  if (!input.trim()) return;

  if (!started) {
    setStarted(true);
  }

  setMessages([
    ...messages,
    {
      id: Date.now(),
      sender: "user",
      text: input,
    },
  ]);

  setInput("");
};

  return (
    <div className=" min-h-screen bg-[#FFF8F2] flex flex-col">
        <Navbar/>

  {/* Hero Section */}
  <div
    className={`transition-all duration-700 overflow-hidden ${
      started
        ? "opacity-0 max-h-0 scale-95"
        : "opacity-100 max-h-[500px] scale-100"
    }`}
  >
    <div className=" max-w-3xl mx-auto text-center flex flex-col items-center justify-center flex-1 mt-24 ">

      <img
        src="/logo.png"
        className="w-50 h-50 mb-6 rounded-3xl shadow-lg"
        alt="logo"
      />

      <h1 className=" text-6xl font-bold text-center">
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
  className={`flex-1 transition-all duration-700 ${
    started
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10 h-0 overflow-hidden"
  }`}
>
  <div className="max-w-4xl mx-auto h-[65vh] overflow-y-auto px-4 py-8 space-y-6">

    {messages.map((msg) => (
      <div
        key={msg.id}
        className={`flex ${
          msg.sender === "user" ? "justify-end" : "justify-start"
        }`}
      >
        {/* AI Message */}
        {msg.sender === "ai" ? (
          <div className="flex items-start gap-3 max-w-3xl">

            <img
              src="/logo.png"
              alt="Sakhi AI"
              className="w-10 h-10 rounded-xl bg-white shadow border border-orange-100 p-1"
            />

            <div className="bg-white border border-orange-100 rounded-2xl rounded-tl-md px-5 py-4 shadow-sm text-gray-800 leading-7">
              {msg.text}
            </div>

          </div>
        ) : (
          /* User Message */
          <div className="bg-orange-500 text-white rounded-2xl rounded-tr-md px-5 py-4 max-w-2xl shadow-md">
            {msg.text}
          </div>
        )}
      </div>
    ))}

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
      placeholder="Type your message..."
      className="flex-1 outline-none bg-transparent"
    />

    <button
      onClick={handleSend}
      className="ml-4 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition"
    >
      <SendHorizonal size={20} />
    </button>
    </div>

  </div>

</div>
  );
};

export default Chatbot;