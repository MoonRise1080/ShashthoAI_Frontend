import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
      </Routes>

    </BrowserRouter>
  )


}

export default App
