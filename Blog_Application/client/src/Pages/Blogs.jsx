import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";
import "./Blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="blogs-container">
      <h2 className="page-title">📝 All Blogs</h2>

      <div className="blogs-grid">
        {blogs.map((b) => (
          <Link to={`/blogs/${b.id}`} className="blog-card" key={b.id}>
            <h3>{b.title}</h3>
            <p className="blog-meta">
              By {b.user?.name || "Unknown"} •{" "}
              {new Date(b.createdAt).toDateString()}
            </p>
            <p className="blog-preview">
              {b.content.slice(0, 100)}...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
