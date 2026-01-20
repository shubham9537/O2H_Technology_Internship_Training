import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import api from "../services/api";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // api.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <b>Author:</b> {post.user?.name}
      </p>
    </div>
  );
};

export default PostPage;
