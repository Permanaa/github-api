import React, { useState } from 'react'
import './style.css'

function Home({ history }) {
  const [username, setUsername] = useState('')

  const handleChange = event => {
    setUsername(event.target.value)
  }

  const handleSubmit = () => {
    history.push(`/repository/${username}`)
  }

  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <img src={require('../../assets/github-logo.png')} alt="logo"/>
          <h1>Search User</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text" 
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Continue</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home