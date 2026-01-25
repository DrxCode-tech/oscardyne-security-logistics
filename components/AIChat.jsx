// components/AIChat.jsx
'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { text: userMsg, from: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          txt: userMsg,
          history: messages,
        }),
      });

      const data = await res.json();
      const aiText = data.reply || "Sorry, I couldn't process that.";

      setMessages(prev => [...prev, { text: "", from: "ai" }]);

      let charIndex = 0;
      const interval = setInterval(() => {
        setMessages(prev => {
          const msgs = [...prev];
          const aiMsg = msgs[msgs.length - 1];

          if (charIndex >= aiText.length) {
            clearInterval(interval);
            return prev;
          }

          aiMsg.text += aiText[charIndex];
          charIndex++;
          return msgs;
        });
      }, 20);

    } catch (err) {
      setMessages((prev) => [...prev, { text: "AI Error: " + err.message, from: "ai" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="oscardyne_ai" className="w-full max-w-3xl mx-auto my-10 p-6 rounded-3xl bg-black/50 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400">
          Oscardyne Security AI
        </h2>
      </div>

      <div className="flex flex-col gap-4 mb-4 p-6 rounded-2xl bg-black/30 backdrop-blur-lg shadow-inner max-h-96 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-5 py-4 rounded-2xl text-sm max-w-[75%] sm:max-w-[90%] break-words leading-relaxed ${
              msg.from === "user"
                ? "bg-blue-600/30 text-white self-end"
                : "bg-white/10 text-gray-200 self-start"
            }`}
          >
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {msg.text}
            </ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-gray-300 animate-pulse text-sm">
            <Loader2 size={16} className="animate-spin" /> Processing...
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
          placeholder="Ask the AI..." 
          className="flex-1 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition" 
        />
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          onClick={sendMessage} 
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-yellow-400 text-black font-semibold shadow-md flex items-center gap-2"
        >
          <Send size={18} /> Send
        </motion.button>
      </div>
    </div>
  );
}