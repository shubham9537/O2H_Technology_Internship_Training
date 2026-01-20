// import React, { useState } from 'react'
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios'
// const Login = () => {
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const navigate=useNavigate()

//     const login=async(e)=>{
//         e.preventDefault()

//         const res=await axios.post("http://localhost:5000/api/auth/login",{
//             email,
//             password
//         })
//         if(res.data.success){
//             alert("Login Successful")
//             navigate('/')

//         }else{
//             alert("Login Failed")
//         }

//     }
    
//   return (
//     <div>
//         <h1>Welcome to Login Page</h1>
//         <form onSubmit={login} method='POST'>
//             <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
//             <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
//             <button type='submit'>Login</button>
//         </form>
//     </div>
//   )
// }

// export default Login


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await login(form);
    navigate("/");
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button>Login</button>
    </form>
  );
}
