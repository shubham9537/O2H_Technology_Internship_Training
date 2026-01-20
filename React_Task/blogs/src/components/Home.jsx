import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main'>
        <h1>Home Component</h1>
        <Link to="/register">Link Register</Link>
        <a href="/register">Anchor Register </a>
        

    </div>
  )
}

export default Home