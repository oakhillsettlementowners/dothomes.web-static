"use client";

import { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import StumpLogo from "@/components/StumpLogo";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm the Oak Hill Settlement community AI assistant. I'm trained on Oregon HOA law (ORS Chapter 94) and governing documents. This is an independent, community-driven tool to help homeowners understand their rights and responsibilities. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I encountered an error. Please try again or contact support if the problem persists.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-stone-50 dark:from-stone-950 dark:to-black flex flex-col">
      {/* Header */}
      <header className="border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <StumpLogo className="w-10 h-10 text-primary-700 dark:text-primary-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors" />
              <div>
                <h1 className="text-2xl font-bold text-primary-900 dark:text-stone-100 group-hover:text-primary-700 dark:group-hover:text-stone-300 transition-colors">
                  <span className="block text-sm font-normal text-primary-700 dark:text-stone-300 group-hover:text-primary-600 dark:group-hover:text-stone-400 transition-colors">Homeowners of</span>
                  Oak Hill Settlement
                </h1>
                <p className="text-sm text-primary-700 dark:text-stone-300">
                  Forest Grove, Oregon • AI Assistant
                </p>
              </div>
            </a>
            <nav className="flex gap-6">
              <a
                href="/"
                className="text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Home
              </a>
              <a
                href="/rights"
                className="text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Your Rights
              </a>
              <a
                href="/documents"
                className="text-primary-700 hover:text-primary-900 focus:text-primary-900 dark:text-stone-200 dark:hover:text-white dark:focus:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                Documents
              </a>
              <a
                href="/chat"
                className="text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
              >
                Ask AI
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        {/* Info Banner */}
        <div className="mb-6 bg-primary-100 dark:bg-primary-950/30 border border-primary-300 dark:border-stone-700 rounded-xl p-4">
          <h2 className="font-bold text-primary-900 dark:text-stone-100 mb-1">
            🤖 Community AI Assistant
          </h2>
          <p className="text-sm text-primary-800 dark:text-stone-200 mb-2">
            Ask questions about Oregon HOA law (ORS 94), Oak Hill Settlement governing
            documents, homeowner rights, and community policies. Responses are generated by
            AI and should be verified for important decisions.
          </p>
          <p className="text-xs text-primary-700 dark:text-stone-300 italic">
            Independent tool • Not affiliated with HOA board or property management
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-xl p-4 ${
                  message.role === "user"
                    ? "bg-primary-600 text-white dark:bg-primary-700"
                    : "bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 text-primary-900 dark:text-stone-100"
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-xl p-4 bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl p-4 shadow-lg"
        >
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about HOA laws, documents, or policies..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg border border-primary-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-primary-900 dark:text-stone-100 placeholder-primary-500 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Chat message input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white font-semibold rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </form>

        {/* Example Questions */}
        <div className="mt-4 text-center">
          <p className="text-sm text-primary-700 dark:text-stone-400 mb-2">
            Try asking:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "What are the architectural guidelines?",
              "How do I request a board meeting?",
              "What does ORS 94 say about special assessments?",
            ].map((question) => (
              <button
                key={question}
                onClick={() => setInput(question)}
                disabled={isLoading}
                className="text-xs px-3 py-1.5 bg-primary-100 hover:bg-primary-200 dark:bg-primary-950/50 dark:hover:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

