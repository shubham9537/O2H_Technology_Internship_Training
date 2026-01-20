import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate=useNavigate();   
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const SubmitPost=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title,body})
        });
        navigate("/")
        // const data=await response.json();
        // console.log(data);
    }

  return (
    <div>
        <h1>Create a post</h1>
        <form onSubmit={SubmitPost}>
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" required/>
            <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Body" required></textarea>
            <button type="submit">Submit</button>


        </form>
    </div>
  )
}

export default CreatePost