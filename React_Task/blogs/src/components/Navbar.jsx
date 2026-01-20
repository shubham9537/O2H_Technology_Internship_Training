import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <h2>Welcome to Blog Website</h2>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar