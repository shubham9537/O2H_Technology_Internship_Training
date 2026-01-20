import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  const handleDelete = async () => {
    await API.delete(`/blogs/${id}`);
    navigate("/");
  };

  if (!blog) return <p>Loading...</p>;

  const isOwner = user && user.id === blog.userId;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>

      {isOwner && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
