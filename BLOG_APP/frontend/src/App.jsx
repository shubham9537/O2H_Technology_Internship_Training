import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList.jsx'
import BlogPost from './components/BlogPost.jsx'
import CreatePost from './components/CreatePost.jsx'  
import Home from './components/Home.jsx'
import EditPost from './components/EditPost.jsx'
import ShowPosts from './components/ShowPosts.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/show" element={<ShowPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App