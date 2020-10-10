import Axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import './style.css'
import LangColors from './github-lang-colors.json'

function Repo(props) {
  const { username } = props.match.params
  const [data, setData] = useState([])
  const [profile, setProfile] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await Axios(`https://api.github.com/users/${username}/repos`).then((res) => {
        setData(res.data)
        setProfile(res.data[0].owner)
      }).catch((err) => {
        setData(err.response.status)
        setError(true)
      })
      setLoading(false)
    }
    fetchData()
  }, [username])

  const showProfile = () => {
    if (error) {
      return
    } else {
      return (
        <div className="profile">
          <h2>{profile.login}</h2>
          <img src={profile.avatar_url} alt="profile"/>
        </div>
      )
    }
  }

  const showData = () => {
    if (data === 404 && error) {
      return <div className="err-wrapper">
        <h3>User not found</h3>
      </div>
    } else if (error) {
      return <div className="err-wrapper">
        <h3>Something when wrong</h3>
      </div>
    } else {
      return data
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .map((repo, key) => (
          <div key={key} className="repo-item">
            <div style={{ border: `3px solid ${LangColors[repo.language] ? LangColors[repo.language] : '#A5B1C1' }`}} className="vl"></div>
            <div>
              <h3>{repo.name}</h3>
              <p className="updated">Updated {updatedDate(repo.updated_at)}</p>
              <p style={{ color: LangColors[repo.language]}} className="language">{repo.language}</p>
            </div>
          </div>
      ))
    }
  }

  const updatedDate = (date) => {
    const diff = moment(date).fromNow()
    return diff
  }

  return (
    <div className="repo">
      <div className="container">
        {
          loading 
          ?
          <div className="loading-wrapper">
            <h3>loading...</h3>
          </div>
          :
          <div className="repo-wrapper">
            { showProfile() }
            <div className="repo-list grid">
              { showData() }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Repo