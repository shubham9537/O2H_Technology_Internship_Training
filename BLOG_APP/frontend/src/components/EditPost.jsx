import React, { useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const EditPost = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");

    useEffect(()=>{
         fetch(`http://localhost:5000/posts/${id}`).then(response=>response.json()).then(data=>{
            setTitle(data.title);
            setBody(data.body);
        });
        
    },[id])

    const updatePost=async(e)=>{
        e.preventDefault()

        await fetch(`http://localhost:5000/posts/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,body})
        });
        navigate("/")
    }
  return (
    <div>
        <h1>~Edit Post</h1>
        <form onSubmit={updatePost}>
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" required/>
            <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Body" required></textarea>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default EditPost