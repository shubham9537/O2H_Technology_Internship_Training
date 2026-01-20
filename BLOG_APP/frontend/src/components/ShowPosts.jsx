import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

const ShowPosts = () => {
    const [posts,setPosts]=useState([])
    const loadPosts=async()=>{
        const response=await fetch("http://localhost:5000/posts");
        const data=await response.json();
        setPosts(data);
    }
    useEffect(()=>{
        loadPosts();
    },[])

    const deletePost=async(id)=>{
        await fetch(`http://localhost:5000/posts/${id}`,{
            method:"DELETE"
        });
        loadPosts();
    }  
  return (
    <div>
        <h1>ShowPosts</h1>
{
        posts.map(post=>(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body.slice(0,100)}...</p>
                <Link to={`/edit/${post.id}`}>Edit</Link>
                <button onClick={()=>deletePost(post.id)}>Delete</button>
            </div>
        ))
    }
    </div>
  )
}

export default ShowPosts