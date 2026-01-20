   import { Router } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const router = Router();
const userRepo = AppDataSource.getRepository(User);

// CREATE
router.post("/", async (req, res) => {
  const user = userRepo.create(req.body);
  const result = await userRepo.save(user);
  res.json(result);
});

// READ
router.get("/", async (req, res) => {
  const users = await userRepo.find();
  res.json(users);
});

// UPDATE
router.put("/:id", async (req, res) => {
  await userRepo.update(req.params.id, req.body);
  res.json({ message: "updated" });
});

// DELETE
router.delete("/:id", async (req, res) => {
  await userRepo.delete(req.params.id);
  res.json({ message: "deleted" });
});

export default router;


