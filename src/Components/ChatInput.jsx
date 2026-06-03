// components/ChatInput.jsx

import { useEffect, useRef } from "react";

export default function ChatInput({ value, onChange, onSend }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    textarea.style.height = "auto";

    textarea.style.height =
      Math.min(textarea.scrollHeight, window.innerHeight * 0.5) + "px";
  }, [value]);

  return (
    <div
      className="
        border
        border-gray-700
        bg-gray-900
        rounded-2xl
        p-3
      "
    >
      <div className="relative flex item-end">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Message AI..."
          className="
            w-full
            resize-none
            bg-transparent
            text-white
            outline-none
            overflow-y-auto
            pr-14
            pb-7
          "
        />

        <button
          onClick={onSend}
          className="
            absolute
            bottom-2
            right-2
            bg-blue-600
            hover:bg-blue-700
            rounded-full
            w-10
            h-10
            text-white
          "
        >
          →
        </button>
      </div>
    </div>
  );
}
