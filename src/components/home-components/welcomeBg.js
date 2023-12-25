import React from 'react'
import './home.css'
import './video/bg-video.mp4'

const WelcomeBg = () => {
  return (
   
            <div className="video-background">
          <video autoPlay loop muted>
            <source src="/media/videos/bg-video-two.mp4" type="video/mp4" />
          </video>

          <div className="content">
            <h1>Welcome to My Website</h1>
            <p>This is some additional content over the video background.</p>
            <br />
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </div>
          </div>
        </div>

      

  )
}

export default WelcomeBg
