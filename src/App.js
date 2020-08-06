import React, { useState, useEffect } from 'react'
import Video from './Video'
import db from './firebase'
import './App.css'

function App() {
  const [videos, setVideos] = useState([])

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    const doc = document.documentElement
    doc.style.setProperty('--vh', `${vh}px`)
  }

  // We listen to the resize event
  window.addEventListener('resize', appHeight)
  appHeight()

  useEffect(() => {
    db.collection('video').onSnapshot(snapshot =>
      setVideos(snapshot.docs.map(doc => doc.data()))
    )
  }, [])

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, shares, messages }, index) =>
          <Video
            key={index}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages} />
        )}
      </div>
    </div>
  );
}

export default App;
