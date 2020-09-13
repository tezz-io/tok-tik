import React, {useState, useEffect} from 'react';
import Video from './Video';
import './App.css';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, [videos])
  

  return (
    <div className="app">
      <div className="app__videos">

        {videos.map((
          {url, channel, description, songName, artistName, likes, messages, shares}) =>
          <Video 
          url={url}
          channel={channel}
          description={description}
          song={songName + " : "  + artistName}
          likes={likes}
          messages={messages}
          shares={shares}
          />)}
      </div>
    </div>
  );
}

export default App;
