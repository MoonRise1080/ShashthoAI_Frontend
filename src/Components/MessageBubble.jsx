// components/MessageBubble.jsx

import { useState } from "react";

export default function MessageBubble({ message }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const isUser = message.sender === "user";

  return (
    <div
      className={`flex flex-col mb-6 ${isUser ? "items-end" : "items-start"}`}
    >
      <div
        className={`
          max-w-[85%]
          px-4
          py-3
          break-words
          whitespace-pre-wrap
          rounded-2xl
          ${isUser ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}
        `}
      >
        {message.text}
      </div>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-xs text-gray-400">{message.time}</span>

        <button
          onClick={handleCopy}
          className="
            text-xs
            text-gray-400
            hover:text-white
          "
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
