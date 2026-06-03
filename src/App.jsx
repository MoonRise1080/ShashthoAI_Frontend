import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ChatPage from "./Pages/AIChat.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/aichat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
