import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/Video/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          (
            { url, channel, description, song, likes, messages, shares },
            index
          ) => {
            return (
              <Video
                key={index}
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
