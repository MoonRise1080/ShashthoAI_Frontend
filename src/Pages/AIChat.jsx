// pages/ChatPage.jsx

import { useEffect, useState } from "react";

import Sidebar from "../Components/Sidebar";
import MessageBubble from "../Components/MessageBubble";
import ChatInput from "../Components/ChatInput";

import { conversations as mockData } from "../data/mockData";

export default function AIChat() {
  const [conversations, setConversations] = useState(mockData);

  const [selectedConversation, setSelectedConversation] = useState(mockData[0]);

  const [collapsed, setCollapsed] = useState(false);

  const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    /*
      API CALL AREA

      Fetch conversations here

      Example:

      axios.get("/conversations")
    */
  }, []);

  const createNewChat = () => {
    const newConversation = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };

    setConversations((prev) => [newConversation, ...prev]);

    setSelectedConversation(newConversation);
  };

  const handleSend = () => {
    const cleanedMessage = message.trimStart();
    if (!cleanedMessage.trim()) return;

    /*
      API CALL AREA

      POST message

      axios.post(...)
    */

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: cleanedMessage,
      time: new Date().toLocaleTimeString(),
    };

    setSelectedConversation((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    setMessage("");
  };

  const filteredConversations = conversations.filter((conversation) =>
    conversation.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="
        h-screen
        bg-slate-900
        text-white
        overflow-hidden
        flex
      "
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        conversations={filteredConversations}
        selectedConversation={selectedConversation}
        setSelectedConversation={setSelectedConversation}
        search={search}
        setSearch={setSearch}
        createNewChat={createNewChat}
      />

      <main
        className="
          flex-1
          flex
          flex-col
        "
      >
        <div
          className="
            flex-1
            overflow-y-auto
            p-6
          "
        >
          {selectedConversation?.messages?.length > 0 ? (
            selectedConversation.messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))
          ) : (
            <div
              className="
                h-full
                flex
                items-center
                justify-center
                text-gray-400
              "
            >
              Start a new conversation
            </div>
          )}
        </div>

        <div className="p-4">
          <ChatInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onSend={handleSend}
          />
        </div>
      </main>
    </div>
  );
}
