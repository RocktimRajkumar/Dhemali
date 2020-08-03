import React from 'react'
import './App.css'
import Video from './Video'

function App() {
  return (
    <div className="app">
      <h1>Hello Dhemali <span role="img" aria-label="fire">🔥</span>  app for sharing short-form video</h1>
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
