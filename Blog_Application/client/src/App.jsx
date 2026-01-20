import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";

import Blogs from "./Pages/Blogs.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
// import EditPost from "./Pages/EditPost.jsx";
import CreateBlog from "./Pages/CreateBlog.jsx";
import BlogDetails from "./Pages/BlogDetails.jsx";
import EditBlog from "./Pages/EditBlog.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<EditBlog />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
