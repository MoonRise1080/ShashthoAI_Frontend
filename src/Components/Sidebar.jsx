// components/Sidebar.jsx

import Button from "./Button";
import SearchBar from "./SearchBar";

export default function Sidebar({
  collapsed,
  setCollapsed,
  conversations,
  selectedConversation,
  setSelectedConversation,
  search,
  setSearch,
  createNewChat,
}) {
  return (
    <aside
      className={`
        bg-gray-950
        border-r
        border-gray-800
        transition-all
        duration-300
        ${collapsed ? "w-16" : "w-80"}
      `}
    >
      <div className="p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white mb-4"
        >
          ☰
        </button>

        {!collapsed && (
          <>
            <Button onClick={createNewChat}>+ New Chat</Button>

            <div className="mt-4">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="mt-4">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`
                    p-3
                    rounded-lg
                    cursor-pointer
                    mb-2
                    hover:bg-gray-800
                    ${
                      selectedConversation?.id === conversation.id
                        ? "bg-gray-800"
                        : ""
                    }
                  `}
                >
                  {conversation.title}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
