import React,{Link} from 'react'

const Home = () => {
  return (
    <div>
        <h1>Welcome to home page</h1>
        {/* <Link to='/create'>Create Post</Link> */}
        <button><a href="/create">Create Post</a></button>
                <button><a href="/show">Show  Post</a></button>

        <button><a href="/create">Create Post</a></button>

    </div>
  )
}

export default Home

