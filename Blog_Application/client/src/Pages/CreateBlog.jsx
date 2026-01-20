import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function CreateBlog() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/blogs", form);
    navigate("/");
  };

  return (
    <form onSubmit={submit}>
      <h2>Create Blog</h2>
      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button>Create</button>
    </form>
  );
}
