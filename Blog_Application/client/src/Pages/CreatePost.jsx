// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const submit = async () => {
//     await axios.post("http://localhost:5000/api/posts", { title, content });
//     navigate("/");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Create Blog</h2>
//       <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
//       <br />
//       <textarea
//         placeholder="Content"
//         rows={6}
//         onChange={(e) => setContent(e.target.value)}
//       />
//       <br />
//       <button onClick={submit}>Create</button>
//     </div>
//   );
// };

// export default CreatePost;


