import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blog_app",
  password: "newpassword123",
  port: 5432,
});


app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.posts ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Database error" });
  }
});


app.post("/posts", async (req, res) => {
  try {
    const { title, body } = req.body;
    const result = await pool.query(
      "INSERT INTO public.posts (title, body) VALUES ($1, $2) RETURNING *",
      [title, body]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Insert failed" });
  }
});


app.get("/posts/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.posts WHERE id = $1",
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Fetch failed" });
  }
});

app.put("/posts/:id", async (req, res) => {
  const { title, body } = req.body;
  const result = await pool.query(
    "UPDATE public.posts SET title=$1, body=$2 WHERE id=$3 RETURNING *",
    [title, body, req.params.id]
  );
  res.json(result.rows[0]);
});

app.delete("/posts/:id", async (req, res) => {
  await pool.query("DELETE FROM public.posts WHERE id=$1", [req.params.id]);
  res.json({ message: "Post deleted" });
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
