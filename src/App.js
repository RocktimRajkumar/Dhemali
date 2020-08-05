import React from 'react'
import './App.css'
import Video from './Video'

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="./test-vdo.mp4"
          channel="RjMusic"
          description="Dancing monkey on the floor"
          song="In the End"
          likes={404}
          shares={302}
          messages={500} />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
