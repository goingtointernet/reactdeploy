import React from 'react'
import './App.css'
import Blog from './pages/Blog';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
