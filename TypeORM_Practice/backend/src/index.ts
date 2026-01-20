import express from "express";
import { AppDataSource } from "./data-source";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.use("/users", userRoutes);

    app.listen(4000, () => {
      console.log("🚀 Server running on port 4000");
    });
  })
  .catch((err) => {
    console.error(" DB error:", err);
  });


  