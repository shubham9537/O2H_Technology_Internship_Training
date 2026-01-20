// import pkg from "@prisma/client";
// const { PrismaClient } = pkg;

// const prisma = new PrismaClient();

// export const createPost = async (req, res) => {
//   const { title, content } = req.body;

//   const post = await prisma.post.create({
//     data: {
//       title,
//       content,
//       userId: req.userId,
//     },
//   });

//   res.json(post);
// };

// export const getPosts = async (req, res) => {
//   const posts = await prisma.post.findMany({
//     include: { user: true },
//     orderBy: { createdAt: "desc" },
//   });

//   res.json(posts);
// };

// export const getPost = async (req, res) => {
//   const post = await prisma.post.findUnique({
//     where: { id: Number(req.params.id) },
//     include: { user: true },
//   });

//   res.json(post);
// };


// export const deletePost = async (req, res) => {
//   await prisma.post.delete({
//     where: { id: Number(req.params.id) },
//   });

//   res.json({ message: "Post deleted" });
// };

import prisma from '../config/prisma.js';

export const createPost = async (req, res) => {
  const { title, content } = req.body;

  const post = await prisma.post.create({
    data: {
      title,
      content,
      userId: req.user.id,
    },
  });

  res.status(201).json(post);
};
export const getSingleBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
  });

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
};


export const getAllPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: { name: true },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  res.json(posts);
};

export const getMyPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { userId: req.user.id },
  });

  res.json(posts);
};

export const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const post = await prisma.post.updateMany({
    where: {
      id: Number(id),
      userId: req.user.id,
    },
    data: { title, content },
  });

  res.json({ message: 'Post updated successfully' });
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  await prisma.post.deleteMany({
    where: {
      id: Number(id),
      userId: req.user.id,
    },
  });

  res.json({ message: 'Post deleted successfully' });
};



