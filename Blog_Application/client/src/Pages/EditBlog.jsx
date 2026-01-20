import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    API.get(`/blogs/${id}`).then((res) => {
      setForm({
        title: res.data.title,
        content: res.data.content,
      });
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await API.put(`/blogs/${id}`, form);
    navigate(`/blogs/${id}`);
  };

  return (
    <form onSubmit={submit}>
      <h2>Edit Blog</h2>
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button>Update</button>
    </form>
  );
}
