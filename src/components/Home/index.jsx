import React from 'react'
import './style.css'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <img src={require('../../assets/github-logo.png')} alt="logo"/>
          <h1>Search User</h1>
          <div>
            <input type="text" placeholder="Username"/>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home