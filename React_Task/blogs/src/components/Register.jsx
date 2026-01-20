import React, { useState } from 'react'

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const responseSubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,password
            })
        });
        
        if(res.status===422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successful");
            console.log("Registration Successful");
        }
    }

  return (
    <div>
        <div>
            <h2>Register</h2>
        </div>
        <div>
            <form method='POST'>
            <label htmlFor="">Create your account</label>
            <label  htmlFor='name'> Name</label>
            <input type="text" placeholder='Enter your name'  onChange={(e)=>setName(e.target.value)}/>
            <label  htmlFor='email'> Email</label>

            <input type="email" placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
            <label  htmlFor='password'> password</label>

            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={responseSubmit}> Register</button>
            </form>
        </div>

    </div>
  )
}

export default Register