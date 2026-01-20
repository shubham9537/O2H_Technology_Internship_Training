import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  createPost,
  getAllPosts,
  getMyPosts,
  updatePost,
  deletePost,getSingleBlog
} from '../controllers/postController.js';

const router = express.Router();

router.get('/', getAllPosts);              
router.get('/me', authMiddleware, getMyPosts);
router.post('/', authMiddleware, createPost);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);
router.get("/:id", getSingleBlog);   // ✅ ADD THIS

export default router;
